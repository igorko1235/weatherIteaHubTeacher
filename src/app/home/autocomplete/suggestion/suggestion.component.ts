import {Component, Input, OnInit} from '@angular/core';
import {WeatherListItem} from "../../../models/weatherListItem";
import {Router} from "@angular/router";
import {fadeInOut} from "../../../animations";

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() weather: WeatherListItem;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToCity() {
    this.router.navigate(['about', this.weather.id]);
  }
}
