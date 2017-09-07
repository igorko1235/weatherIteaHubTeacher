import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit {
  @Input() weather: any;
  constructor() { }

  ngOnInit() {
  }

}
