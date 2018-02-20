import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  transform(filename: string, args?: string): string {

    const images = {
      large: '-tn640.png',
      medium: '-tn320.png',
      small: '-tn160.png',
    };

    if (args) {
      return filename.split('.')[0] + images[args];
    }
    return filename.split('.')[0] + images.small;
  }
}


