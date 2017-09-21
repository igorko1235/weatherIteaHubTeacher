import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.css']
})
export class ForecastDayComponent implements OnInit,  OnChanges {
  max: number = 0;
  min: number = 0;
  avg: number = 0;
  clouds: number = 0;
  wind: number = 0;
  cloudy: boolean = false;


  private _day = new BehaviorSubject([]);

  // change data to use getter and setter
  @Input()
  set day(value) {
    // set the latest value for _day BehaviorSubject
    console.log(value)
    this._day.next(value);
  };

  get day() {
    // get the latest value from _day BehaviorSubject
    return this._day.getValue();
  }



  constructor() { }

  maxTemp (day) {

   return day.reduce( ( acc, e) => {
     return e.main.temp_max > acc ? e.main.temp_max: acc;

    }, 0)
  }

  minTemp (day) {

    return day.reduce( ( acc, e) => {
      return e.main.temp_min < acc ? e.main.temp_min: acc;

    }, Infinity)
  }
  avgTemp (day) {

    let tempArray = day.reduce( ( acc, e) => {
       acc.push(e.main.temp)
      return acc

    }, [])

    let tempSum = tempArray.reduce( (acc, e) => {
      return acc + e;
    }, 0)
    return +( tempSum / tempArray.length ).toFixed(1)
  }

  avgClouds (day) {

    let cloudArray = day.reduce( ( acc, e) => {
      acc.push(e.clouds.all)
      return acc

    }, [])

    let cloudSum = cloudArray.reduce( (acc, e) => {
      return acc + e;
    }, 0)
    return +( cloudSum / cloudArray.length ).toFixed(1)
  }

  avgWind (day) {

    let windArray = day.reduce( ( acc, e) => {
      acc.push(e.wind.deg)
      return acc

    }, [])

    let windSum = windArray.reduce( (acc, e) => {
      return acc + e;
    }, 0)
    return +( windSum / windArray.length ).toFixed(1)
  }

  isCloudy (day) {
    let cloudyHours = day.reduce( ( acc, e) => {
       (e.weather[0].main == "Clouds" || e.weather[0].main == "Rain") ? acc++ : acc
      return acc
    },0)
    console.log(cloudyHours)
    return cloudyHours > 3
  }

  ngOnInit() {
    // now we can subscribe to it, whenever input changes,
    // we will run our grouping logic
    this._day
      .subscribe(day => {
        console.log(day)
        this.max = this.maxTemp(day);
        this.min = this.minTemp(day);
        this.avg = this.avgTemp(day);
        this.clouds = this.avgClouds(day);
        this.wind = this.avgWind(day);
        this.cloudy = this.isCloudy(day);
      });
  }

  ngOnChanges () {

  }

}
