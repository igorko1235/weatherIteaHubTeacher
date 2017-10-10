import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';
import {ANIMATIONS_STATES} from "../../../animations";

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent {
  public state = ANIMATIONS_STATES.INACTIVE;
  @Input() weather: WeatherListItem;
  @Output() myCustomEvent: EventEmitter <number> = new EventEmitter();
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
