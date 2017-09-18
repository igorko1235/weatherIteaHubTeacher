import {Component, HostBinding, Input} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';
import {fadeInOut, flyInOut, scaleUp} from '../../../animations';

const MY_STATES = {
  start: 'small',
  end: 'end'
};

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css'],
  animations: [
    fadeInOut('1s', 0, 1),
    flyInOut(),
    scaleUp('1s', 1, 1.5, MY_STATES.start, MY_STATES.end)
  ]
})
export class ForecastItemComponent {
  public state = MY_STATES.start;
  @Input() weather: WeatherListItem;
  @HostBinding('@flyInOut') flyInOut() {}
  constructor() {}
  scaleMyself() {
    this.state = this.state === MY_STATES.start ?  MY_STATES.end : MY_STATES.start;
  }
}
