import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../../environments/environment";
export enum TEM_PIPES_TYPE {
  AVG,
  MIN,
  MAX,
}
@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temperature: number[] | string, agregator: TEM_PIPES_TYPE): any {
    if (Array.isArray(temperature)) {
      switch (agregator) {
        case TEM_PIPES_TYPE.AVG: {
          return temperature.reduce((a, b) => a + b, 0) / temperature.length;
        }
        case TEM_PIPES_TYPE.MAX: {
          return Math.max(...temperature);
        }
        case TEM_PIPES_TYPE.MIN: {
          return Math.min(...temperature);
        }
      }
    } else {
      const units = environment.BASE_METRIC_UNITS[environment.BASE_API_UNITS];
      if (units) {
        return `${temperature} &deg;${units.temperature}`;
      }
      return temperature;
    }
  }

}
