import {Component, Input, OnInit} from '@angular/core';
import {WeatherListItem} from "../../../models/weatherListItem";

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() weather: WeatherListItem;
  constructor() { }

  ngOnInit() {
  }

}
