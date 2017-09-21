import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {WeatherList} from "../../models/weather-list";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit, OnDestroy {
  @Input() cityId: number;
  public days = [];
  public res: WeatherList;
  private subscriptions: Subscription [] = [];

  constructor(private dataService: DataService) {
  }

  splitIntoDays(res) {
    let tempArray =[];
    let previousDay
    let currentDay
    res.list.map( (e, i)  => {
      // // console.log(i)
      if (i === 0) {
         previousDay = e.dt_txt.split(' ')[0]
         currentDay = e.dt_txt.split(' ')[0]
      } else {
        previousDay = currentDay
        currentDay = e.dt_txt.split(' ')[0]
      }

      if ( currentDay === previousDay) {
        tempArray.push(e)
      } else {
        this.days.push(tempArray)
        tempArray = [];
        tempArray.push(e)
      }

    })
  }


  handlePositions(pos: Position) {
    const forecastByPos = this.dataService.getForecastByPositions(pos).subscribe(res => {
      this.res = res;
      this.splitIntoDays(res);
      this.dataService.toggleLoading(false);
    });
    this.subscriptions.push(forecastByPos);
  }

  ngOnInit() {
    this.dataService.toggleLoading(true);
    if (!this.cityId) {
      if (this.dataService.currentPosition) {
        this.handlePositions(this.dataService.currentPosition);
      } else {
        const posSub = this.dataService.getPosition().subscribe(
          pos => {
            this.handlePositions(pos);
          }
        );
        this.subscriptions.push(posSub);
      }
    } else {
      const forecastById = this.dataService.getForecastByCityID(this.cityId.toString()).subscribe(res => {
        this.res = res;
        this.splitIntoDays(res);
        // console.log(res)
        this.dataService.toggleLoading(false);
      });
      this.subscriptions.push(forecastById);
    }
  }

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }
}
