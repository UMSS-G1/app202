import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { TasksSqlService } from '../providers/tasks-sql-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) navMaster: Nav;
  rootPage:any = 'TutorialPage';

  pages: any[] = [
    {
      title: 'Home',
      icon: 'home',
      component: 'HomePage'
    },
    {
      title: 'Tasks',
      icon: 'list',
      component: 'TabsPage',
      index: 0
    },
    {
      title: 'Tasks Done',
      icon: 'list',
      component: 'TabsPage',
      index: 1
    },
    {
      title: 'Tasks Sqlite',
      icon: 'list',
      component: 'TasksSqlPage'
    },
    {
      title: 'Tasks Local',
      icon: 'list',
      component: 'TasksLocalPage'
    },
    {
      title: 'Tasks Firebase',
      icon: 'list',
      component: 'TasksFirebasePage'
    },
    {
      title: 'Albums',
      icon: 'camera',
      component: 'AlbumsPage'
    },
    {
      title: 'Buttons',
      icon: 'beer',
      component: 'ButtonsPage'
    },
    {
      title: 'Lista',
      icon: 'list',
      component: 'ListsPage'
    },
    {
      title: 'Slides',
      icon: 'people',
      component: 'SlidesPage'
    },
    {
      title: 'Users',
      icon: 'people',
      component: 'UsersPage'
    }
  ];

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public sqlite: SQLite,
    public tasksSqlService: TasksSqlService
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
    });
  }

  openPage( page ){
    if(page.index !== null){
      this.navMaster.setRoot( page.component ,{
        index: page.index
      });
    }else{
      this.navMaster.setRoot( page.component );
    }
  }

  logout(){
    this.navMaster.setRoot('TutorialPage');
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then(db=>{
      this.tasksSqlService.setDatabase(db);
      this.tasksSqlService.createTable();
    })
    .catch(error =>{
      console.log(error);
    });
  }
}

