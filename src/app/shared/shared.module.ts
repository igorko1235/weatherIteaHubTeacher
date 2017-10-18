import { NgModule } from '@angular/core';
import {ForecastItemComponent} from './forecast/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';
import {DelayDirective} from './directives/delay.directive';
import {ImagePipe} from './pipes/image.pipe';
import {TemperaturePipe} from './pipes/temperature.pipe';
import {BootstrapUIModule} from './bootstrapui/bootstrapui.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import {environment} from '../../environments/environment';

@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    BootstrapUIModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BootstrapUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    ModalComponent
  ]
})
export class SharedModule { }
