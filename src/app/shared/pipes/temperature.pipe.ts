import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../../environments/environment";

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temperature: any, type?: any): any {
    const units = environment.BASE_METRIC_UNITS[environment.BASE_API_UNITS];
    if (units) {
      return `${temperature} &deg;${units.temperature}`;
    }
    return temperature;
  }

}
