import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {City} from '../../models/city';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input() city: City;
  @Input() index: number;
  @Output() cityDeleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteCity() {
    this.cityDeleted.emit(this.index);
  }

}
