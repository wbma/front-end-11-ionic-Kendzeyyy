import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../../providers/media/media';
import {UploadPage} from '../upload/upload';
import {RegisterPage} from '../register/register';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  MediaFiles: any;
  router: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mediaService: MediaService) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem('token') !==null) {
      console.log('ionViewDidLoad HomePage');
      this.mediaService.getUserData().subscribe(response => {
        this.showImages();
        console.log('Welcome ' + response ['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.router.navigate(['login']);
      })}
    else{
      console.log("code success");
    this.navCtrl.setRoot(LoginPage);
    }
  }


  login(){
    if (localStorage.getItem('token') !==null){

    }else {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.navCtrl.setRoot(LoginPage);
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }

  upload(){
    this.navCtrl.setRoot(UploadPage);
  }




  showImages(){
    this.mediaService.getMediaFiles(0, 10).subscribe(response => {
      console.log(response);
      console.log("images showing");
      this.MediaFiles = response;
      console.log(this.MediaFiles);
    });
  }




}
