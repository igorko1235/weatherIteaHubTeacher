import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../../environments/environment";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(icon: any, type?: any): any {
    if (type === 'country') {
      return environment.GET_COUNTRY_IMAGE_URL(icon);
    } else if (type === 'weather') {
      return environment.GET_WEAHTHER_IMAGE_URL(icon);
    }
    return icon.toLowerCase();
  }

}
