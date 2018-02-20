import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../../providers/media/media';
import {Media} from '../../app/media';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  file: File;
  media: Media = {
    title: '',
    description: '',
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mediaService: MediaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  public upload() {

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    console.log(formData);

    this.mediaService.upload(formData).subscribe(data => {
      console.log(data);
    }, (e: HttpErrorResponse) => {
      console.log(e);
    });
  }



}
