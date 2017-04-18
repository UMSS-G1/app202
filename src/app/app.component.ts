import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
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
}

