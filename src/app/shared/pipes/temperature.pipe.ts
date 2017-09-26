import { Pipe, PipeTransform } from '@angular/core';
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
      const units = environment.BASE_METRIC_UNITS[environment.BASE_API_UNITS];
      
      if (Array.isArray(temperature)) {
        switch (agregator) {
          case TEM_PIPES_TYPE.AVG: {
            return `${(temperature.reduce((a, b) => a + b, 0) / temperature.length).toFixed()} °${units.temperature}`;
          }
          case TEM_PIPES_TYPE.MAX: {
            return `${Math.max(...temperature).toFixed()} °${units.temperature}`;
          }
          case TEM_PIPES_TYPE.MIN: {
            return `${Math.min(...temperature).toFixed()} °${units.temperature}`;
          }
        }
      } else {
        if (units) {
          return `${temperature} °${units.temperature}`;
        }
        return temperature;
      }
    }
  
  }