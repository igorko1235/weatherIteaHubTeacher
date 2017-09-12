import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent{
  @Input() weather: WeatherListItem;
  constructor() { }
}
