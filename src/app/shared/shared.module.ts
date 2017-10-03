import { NgModule } from '@angular/core';
import {ForecastItemComponent} from './forecast/forecast-item/forecast-item.component';
import {ForecastComponent} from './forecast/forecast.component';
import {DelayDirective} from './directives/delay.directive';
import {ImagePipe} from './pipes/image.pipe';
import {TemperaturePipe} from './pipes/temperature.pipe';
import {BootstrapUIModule} from './bootstrapui/bootstrapui.module';
import {MaterialModule} from './material/material.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBYWNdlErPkBY7UhzcikVdyT0iSaQQ9wGE',
    authDomain: 'iteahhubbackend.firebaseapp.com',
    databaseURL: 'https://iteahhubbackend.firebaseio.com/',
    storageBucket: '.appspot.com',
    messagingSenderId: '',
};

@NgModule({
  exports: [
    ForecastItemComponent,
    ForecastComponent,
    DelayDirective,
    ImagePipe,
    TemperaturePipe,
    BootstrapUIModule,
    MaterialModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapUIModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
