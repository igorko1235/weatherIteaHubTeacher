import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as $ from 'jquery';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
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
import { HelpComponent } from './help/help.component';
import { ForecastComponent } from './home/forecast/forecast.component';
import { ForecastItemComponent } from './home/forecast/forecast-item/forecast-item.component';
import { TodayWeatherComponent } from './home/today-weather/today-weather.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherComponent } from './weather-list/weather/weather.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { LoaderComponent } from './loader/loader.component';

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
    HelpComponent,
    ForecastComponent,
    ForecastItemComponent,
    TodayWeatherComponent,
    WeatherListComponent,
    WeatherComponent,
    CityWeatherComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
