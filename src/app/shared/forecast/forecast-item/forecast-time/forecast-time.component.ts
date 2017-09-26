import { Component, OnInit,Input } from '@angular/core';
import {WeatherListItem} from '../../../../models/weatherListItem';



@Component({
  selector: 'app-forecast-time',
  templateUrl: './forecast-time.component.html',
  styleUrls: ['./forecast-time.component.css']
})
export class ForecastTimeComponent implements OnInit {

  @Input() weatherTime: WeatherListItem

  constructor() {
   }

  ngOnInit() {

    console.log(this.weatherTime);
    
  }

}
