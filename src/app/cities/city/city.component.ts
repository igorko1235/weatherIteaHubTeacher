import {Component, Input, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import {City} from '../../models/city';
import {DataService} from "../../services/data.service";
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: []
})
export class CityComponent implements OnInit {
  @Input() city: City;
  @Input() index: number;
  @Output() cityDeleted = new EventEmitter();
  get dataFromService() {
    return this.dataService.data;
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  deleteCity() {
    this.cityDeleted.emit(this.index);
  }

}
