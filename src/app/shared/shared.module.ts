import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastItemComponent} from './forecast/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';
import {DelayDirective} from './directives/delay.directive';
import { ImagePipe } from './pipes/image.pipe';
import * as moment from 'moment';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ForecastTimeComponent } from './forecast/forecast-item/forecast-time/forecast-time.component';
import {MaterialModule} from './material/material.module';
import {NgprimeModule} from './ngprime/ngprime.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    FormsModule,
    MaterialModule,
    NgprimeModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgprimeModule
  ],
  declarations: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    ForecastTimeComponent
  ]
})
export class SharedModule { }
