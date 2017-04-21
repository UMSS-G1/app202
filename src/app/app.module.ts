import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AlbumsService } from '../providers/albums-service';
import { UsersService } from '../providers/users-service';

import { MyApp } from './app.component';

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

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, ionicConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlbumsService,
    UsersService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
