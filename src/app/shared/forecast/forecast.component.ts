import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {WeatherList} from '../../models/weather-list';
import {Subscription} from 'rxjs/Subscription';
import {ForecastItemComponent} from "./forecast-item/forecast-item.component";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() cityId: number;
  @ViewChild('item') item: ForecastItemComponent;
  get getItem () {
    return this.item;
  }
  public res: WeatherList;
  private subscriptions: Subscription [] = [];

  constructor(private dataService: DataService) {}

  handlePositions(pos: Position) {
    const forecastByPos = this.dataService.getForecastByPositions(pos).subscribe(res => {
      this.res = res;
      // setTimeout(() => {
      //   this.getItem.myCustomEvent.subscribe((next) => {
      //     console.log(next);
      //   });
      //   let i = 0;
      //   setInterval(() => {
      //     i += 1;
      //     this.getItem.myCustomEvent.next(i);
      //   }, 1000);
      //   this.getItem.myCustomEvent.next(12345343545654);
      // }, 2000);
    });
    this.subscriptions.push(forecastByPos);
  }
  ngAfterViewInit() {
  }

  handler(event) {
    console.log(event);
  }
  ngOnInit() {
    if (!this.cityId) {
      if (this.dataService.currentPosition) {
        this.handlePositions(this.dataService.currentPosition);
      } else {
        const posSub = this.dataService.getPosition().subscribe(pos => {
            this.handlePositions(pos);
          }
        );
        this.subscriptions.push(posSub);
      }
    } else {
      const forecastById = this.dataService.getForecastByCityID(this.cityId.toString())
          .subscribe(
      res => {
              this.res = res;
          },
          e => {
            console.log(e.message);
          }
      );
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
