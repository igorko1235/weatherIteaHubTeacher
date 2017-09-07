import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {

  public request: any;
  public isLoading = false;
  public env: any;
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
    this.dataService.getCurrentWeahter(position).subscribe(request => {
      this.request = request;
      this.isLoading = false;
    });
  }

}
