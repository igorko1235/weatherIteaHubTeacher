import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DataService} from './services/data.service';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {AutocompleteComponent} from './home/autocomplete/autocomplete.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { TodayWeatherComponent } from './home/today-weather/today-weather.component';
import { LoaderComponent } from './loader/loader.component';
import { SuggestionComponent } from './home/autocomplete/suggestion/suggestion.component';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfigService} from "./config.service";

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent,
    TodayWeatherComponent,
    LoaderComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    DataService, ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
