import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {WeatherList} from "../../models/weather-list";
import {Subscription} from "rxjs/Subscription";
import { asEnumerable } from 'linq-es2015';
import * as moment from 'moment/moment';
import {WeatherListItem} from '../../models/weatherListItem'
export enum TEM_TYPES{
  AVG,
  MIN,
  MAX
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit, OnDestroy {
  @Input() cityId: number;
  public res: any//WeatherListItem[][]
  private subscriptions: Subscription [] = [];

  constructor(private dataService: DataService) 
  {
  }


  handlePositions(pos: Position) {
    const forecastByPos = this.dataService.getForecastByPositions(pos).subscribe(res => {
     
      this.res = asEnumerable(res.list).Select(x=> {x.isShow = true; return x;}).GroupBy(x=> moment(x.dt_txt).date()).ToArray();

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
