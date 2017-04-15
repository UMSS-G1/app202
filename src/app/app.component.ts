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
      component: 'TasksPage'
    },
    {
      title: 'Albums',
      icon: 'camera',
      component: 'AlbumsPage'
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
    this.navMaster.setRoot( page.component );
  }

  logout(){
    this.navMaster.setRoot('TutorialPage');
  }
}

