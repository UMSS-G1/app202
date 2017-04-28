import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';


import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';


import { HttpModule } from '@angular/http';

import { AlbumsService } from '../providers/albums-service';
import { UsersService } from '../providers/users-service';
import { TasksService } from '../providers/tasks-service';
import { TasksSqlService } from '../providers/tasks-sql-service';
import { TasksLocalService } from '../providers/tasks-local-service';
import { TasksFirebaseService } from '../providers/tasks-firebase-service';

import { IonicStorageModule } from '@ionic/storage';


import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyBn-w2EPY_jR75eLvcQrttnfaTBvB_-XP0",
  authDomain: "ion-demo-156701.firebaseapp.com",
  databaseURL: "https://ion-demo-156701.firebaseio.com",
  projectId: "ion-demo-156701",
  storageBucket: "ion-demo-156701.appspot.com",
  messagingSenderId: "564553849534"
};

const ionicConfig = {
  tabsHideOnSubPages: true,
  platforms:{
    ios:{
      tabsPlacement: 'bottom',
    },
    android:{
      tabsPlacement: 'top',
    }
  }
};

const cloudConfig = {
  'core': {
    'app_id': '1b628511'
  },
  'push': {
    'sender_id': '564553849534',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, ionicConfig),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    CloudModule.forRoot( cloudConfig )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Camera,
    Geolocation,
    GoogleMaps,
    AlbumsService,
    UsersService,
    TasksService,
    TasksSqlService,
    TasksLocalService,
    TasksFirebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
