import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../../providers/media/media';
import {User} from '../../app/user';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mediaService: MediaService) {
  }

  user: User = {
    username: '',
    password: '',
    email: '',
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  public register() {
    this.mediaService.register(this.user).subscribe(response => {
      console.log(response);
      this.mediaService.username = this.user.username;
      this.mediaService.password = this.user.password;
      this.mediaService.login();
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });

  }
}
