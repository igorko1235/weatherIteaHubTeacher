import {Component, HostBinding, Input} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';
import {fadeInOut, scaleUp} from '../../../animations';


const MY_STATES = {
  start: 'small',
  end: 'big'
};

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css'],
  animations: [
    fadeInOut(),
    scaleUp('1s', 1, 1.5, MY_STATES.start, MY_STATES.end)
  ]
})
export class ForecastItemComponent {
  public state = MY_STATES.start;
  public format = 'fullDate';
  @Input() weather: WeatherListItem;
  @HostBinding('@fadeInOut') fadeInOut() {}
  constructor() {}
  changeFormat() {

  }
  scaleMyself() {
    // this.format = this.format === 'fullDate' ?  'longDate' : 'fullDate';
    // this.state = this.state === MY_STATES.start ?  MY_STATES.end : MY_STATES.start;
  }
}
