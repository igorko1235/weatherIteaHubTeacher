import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Directive({
  selector: '[appCountry]'
})
export class CountryDirective implements OnInit {
  @Input('appCountry') countryId: string;
  @HostBinding() src;
  constructor() {}
  ngOnInit() {
    this.src = environment.GET_COUNTRY_IMAGE_URL(this.countryId);
  }
}
