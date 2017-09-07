import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {environment} from "../../../environments/environment";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit, OnDestroy {
  public request: any;
  public isLoading = false;
  public env: any;
  private subscriptions: Subscription [] = [];
  constructor(private dataService: DataService) {
    this.env = environment;
  }

  ngOnInit() {
    this.dataService.getPosition().subscribe((res) => {
      this.handlePosition(res);
    });
  }
  handlePosition(position: Position) {
    this.isLoading = true;
    const sub = this.dataService.getCurrentWeahter(position).subscribe(request => {
      this.request = request;
      this.isLoading = false;
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
