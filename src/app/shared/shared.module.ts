import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastItemComponent} from './forecast/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';

@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    ForecastItemComponent,
    ForecastComponent
  ]
})
export class SharedModule { }
