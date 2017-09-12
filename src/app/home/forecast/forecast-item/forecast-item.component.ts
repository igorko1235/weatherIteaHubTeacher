import {Component, Input, OnInit} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit {
  @Input() weather: WeatherListItem;
  constructor() { }

  ngOnInit() {
  }

}
