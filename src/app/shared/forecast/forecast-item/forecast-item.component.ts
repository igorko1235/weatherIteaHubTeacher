import {Component, Input} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';
import {ANIMATIONS_STATES, scaleUp} from '../../../animations';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css'],
  animations: [
    scaleUp('1s', 1, 1.1)
  ]
})
export class ForecastItemComponent {
  public state = ANIMATIONS_STATES.INACTIVE;
  @Input() weather: WeatherListItem;
  constructor() {}
  scaleMyself() {
    this.state =
      this.state === ANIMATIONS_STATES.INACTIVE ?
        ANIMATIONS_STATES.ACTIVE : ANIMATIONS_STATES.INACTIVE;
  }
}
