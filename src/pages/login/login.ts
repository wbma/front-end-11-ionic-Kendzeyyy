import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {HomePage} from '../home/home';
import {MediaService} from '../../providers/media/media';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  status: string;
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  username: string;
  password: string;
  email: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient,
              public mediaService: MediaService) {
  }

  ionViewDidLoad()
    {
      console.log('ionViewDidLoad LoginPage');
    }
  public login()
    {
      console.log('uname: ' + this.username);
      console.log('pwd: ' + this.password);
      console.log('mail: ' + this.email);

      const body = {
        username: this.username,
        password: this.password,
        email: this.email,
      };

      const settings = {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
      };

      this.httpClient.post(this.apiUrl + '/login', body, settings).
        subscribe(response => {
          console.log(response['token']);
          localStorage.setItem('token', response['token']);
          this.navCtrl.push(HomePage);
        }, (error: HttpErrorResponse) => {
          console.log(error.error.message);
          this.status = error.error.message;
        });
    }
  }



