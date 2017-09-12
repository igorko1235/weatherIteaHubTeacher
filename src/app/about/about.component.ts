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
  constructor(private acvivatedRoute: ActivatedRoute) {}
  ngOnInit() {
    const route = this.acvivatedRoute.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
        }
      }
    );
    this.subs.push(route);
  }

}
