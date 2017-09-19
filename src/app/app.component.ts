import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Moment} from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public moment: Moment;
  constructor() {
    this.moment = moment();
  }
  ngOnInit() {
  }
}
