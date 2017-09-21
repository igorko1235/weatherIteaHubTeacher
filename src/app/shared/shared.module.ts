import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastItemComponent} from './forecast/forecast-day/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';
import {DelayDirective} from './directives/delay.directive';
import { ImagePipe } from './pipes/image.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import {BootstrapUIModule} from "./bootstrapui/bootstrapui.module";
import {MaterialModule} from "./material/material.module";
import { ForecastDayComponent } from './forecast/forecast-day/forecast-day.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
// import {Subscription} from "rxjs/Subscription";

@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    BootstrapUIModule,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapUIModule,
    NgbModule
  ],
  declarations: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    ForecastDayComponent
  ]
})
export class SharedModule { }
