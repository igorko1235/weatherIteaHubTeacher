import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public id: string;
  public res: any;
  private subs: Subscription [] = [];
  constructor(
    private dataService: DataService,
    private acvivatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.dataService.toggleLoading(true);
    const route = this.acvivatedRoute.params.subscribe(
      params => {
        this.dataService.getForecastByCityID(params['id']).subscribe(res => {
          this.res = res;
          this.dataService.toggleLoading(false);
        }, error2 => {
          console.log(error2);
          this.dataService.toggleLoading(false);
        });
      }
    );
    this.subs.push(route);
  }

}
