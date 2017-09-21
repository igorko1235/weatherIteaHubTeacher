import {Component, OnInit, ViewChild} from '@angular/core';
import {TodayWeatherComponent} from "./today-weather/today-weather.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log();
  }
}
