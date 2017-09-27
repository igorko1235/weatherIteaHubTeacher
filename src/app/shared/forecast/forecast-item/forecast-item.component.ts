import {Component, Input} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';
import {ANIMATIONS_STATES, fadeInOut, scaleUp} from '../../../animations';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css'],
  animations: [
    scaleUp(500, 1, 1.2)
  ]
})
export class ForecastItemComponent {
  public state = ANIMATIONS_STATES.INACTIVE;
  @Input() weather: WeatherListItem;
  constructor() {}
  start(){
    this.state = ANIMATIONS_STATES.INACTIVE;
  }
  middle(){
    this.state = ANIMATIONS_STATES.MIDDLE;
  }
  end(){
    this.state = ANIMATIONS_STATES.ACTIVE;
  }
}
