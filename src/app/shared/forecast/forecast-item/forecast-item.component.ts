import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {WeatherListItem} from '../../../models/weatherListItem';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent
  implements
    OnChanges, OnInit, OnDestroy, AfterContentChecked,
    AfterContentInit, AfterViewInit, AfterViewChecked {
  @Input() weather: WeatherListItem;
  constructor() { }

  ngOnChanges() {
    console.log('I`m on changes event');
  }
  ngOnInit() {
    console.log('I`m on init');
  }
  ngOnDestroy() {
    console.log('I`m dying');
  }
  ngAfterContentInit() {
    console.log('My bindings checked');
  }
  ngAfterContentChecked() {
    console.log('I`m checking something in mine bindings');
  }
  ngAfterViewInit() {
    console.log('My view ready');
  }
  ngAfterViewChecked() {
    console.log('Hello my view checked, maybe children have something new?');
  }
}
