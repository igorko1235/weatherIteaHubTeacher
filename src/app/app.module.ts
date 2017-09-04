import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { MyhiddenDirective } from './directives/myhidden.directive';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { DelayDirective } from './directives/delay.directive';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    AutocompleteComponent,
    MyhiddenDirective,
    MyNgIfDirective,
    DelayDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
