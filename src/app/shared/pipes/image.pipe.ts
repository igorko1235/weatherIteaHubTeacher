import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(icon: any, type?: any): any {
    if (type === 'country') {
      return this.getWeatherImageUrl(icon);
    } else if (type === 'weather') {
      return this.getCountryImageUrl(icon);
    }
    return icon.toLowerCase();
  }

  private getWeatherImageUrl(id: string) {
    return environment.BASE_CURRENT_WEATHER_URL + id.toLowerCase() + '.png';
  }

  private getCountryImageUrl(id: string) {
    return environment.COUNTRY_IMAGE_BASE + id.toLowerCase() + '.png';
  }
}
