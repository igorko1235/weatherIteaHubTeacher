import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosition().subscribe( pos => {});
  }
}
