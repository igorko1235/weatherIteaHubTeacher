import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastItemComponent} from './forecast/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';
import {CountryDirective} from './directives/country.directive';
import {DelayDirective} from './directives/delay.directive';
import {WeatherDirective} from "./directives/weather.directive";

@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent,
    CountryDirective,
    DelayDirective,
    WeatherDirective
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    ForecastItemComponent,
    ForecastComponent,
    CountryDirective,
    DelayDirective,
    WeatherDirective
  ]
})
export class SharedModule { }
