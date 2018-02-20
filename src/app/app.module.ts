import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {ProfilePage} from '../pages/profile/profile';
import {UploadPage} from '../pages/upload/upload';
import {RegisterPage} from '../pages/register/register';
import {ThumbnailPipe} from '../pipes/thumbnail/thumbnail';
import {MediaService} from '../providers/media/media';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    UploadPage,
    ThumbnailPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    UploadPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediaService,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
