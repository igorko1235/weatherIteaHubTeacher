import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastItemComponent} from './forecast/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';
import {DelayDirective} from './directives/delay.directive';
import { ImagePipe } from './pipes/image.pipe';
import * as moment from 'moment';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe
  ]
})
export class SharedModule { }
