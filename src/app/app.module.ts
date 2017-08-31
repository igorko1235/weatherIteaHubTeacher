import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './cities/city/city.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
