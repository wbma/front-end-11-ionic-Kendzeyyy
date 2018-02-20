import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';



@Injectable()
export class MediaService {


  status: string;
  username: string;
  password: string;
  email: string;

  apiUrl = 'http://media.mw.metropolia.fi/wbma';


  constructor(private http: HttpClient) { }

  public login() {
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

    this.http.post(this.apiUrl + '/login', body, settings).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      this.status = error.error.message;
    });
  }

  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.get(this.apiUrl + '/users/user', settings);
  }

  getMediaFiles(start: number, amount: number){
    return this.http.get(this.apiUrl + '/media?start=' + start + '&limit=' + amount);
  }

  public register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  public upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    console.log("uploading image");
    return this.http.post(this.apiUrl + '/media', formData, settings);
  }




  }



