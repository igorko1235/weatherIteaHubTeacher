import {Directive, HostBinding, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Directive({
  selector: '[appWeather]'
})
export class WeatherDirective implements OnInit {
  @Input('appWeather') weatherId: string;
  @HostBinding() src;
  constructor() {}
  ngOnInit() {
    this.src = environment.GET_WEAHTHER_IMAGE_URL(this.weatherId);
  }
}
