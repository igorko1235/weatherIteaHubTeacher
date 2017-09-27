import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {environment} from "../../../environments/environment";
import {Subscription} from "rxjs/Subscription";
import {WeatherListItem} from "../../models/weatherListItem";
import {fadeInOut, flyInOut, flyInOutKEY} from "../../animations";

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css'],
  animations: [
    flyInOut(),
    fadeInOut(2, true),
    flyInOutKEY()]
})
export class TodayWeatherComponent implements OnInit, OnDestroy {
  isShow = true;
  public request: WeatherListItem;
  public env: any;
  private subscriptions: Subscription [] = [];
  constructor(private dataService: DataService) {
    this.env = environment;
  }

  ngOnInit() {
    if (!this.dataService.currentPosition) {
      const posSub = this.dataService.getPosition().subscribe((res) => {
        this.handlePosition(res);
      });
      this.subscriptions.push(posSub);
    } else {
      this.handlePosition(this.dataService.currentPosition);
    }
  }
  handlePosition(position: Position) {
    this.dataService.toggleLoading(true);
    const sub = this.dataService.getCurrentWeahter(position).subscribe(request => {
      this.request = request;
      this.dataService.toggleLoading(false);
    });
    this.subscriptions.push(sub);
  }
  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }
}
