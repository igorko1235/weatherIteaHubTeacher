import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as $ from 'jquery';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {DelayDirective} from './directives/delay.directive';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {AutocompleteComponent} from './home/autocomplete/autocomplete.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ForecastComponent } from './home/forecast/forecast.component';
import { ForecastItemComponent } from './home/forecast/forecast-item/forecast-item.component';
import { TodayWeatherComponent } from './home/today-weather/today-weather.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { LoaderComponent } from './loader/loader.component';
import { SuggestionComponent } from './home/autocomplete/suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    DelayDirective,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent,
    ForecastComponent,
    ForecastItemComponent,
    TodayWeatherComponent,
    CityWeatherComponent,
    LoaderComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
