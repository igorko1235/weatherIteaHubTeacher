import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() search: string;
  @Output() searchChange = new EventEmitter();
  get dataFromService() {
    return this.dataService.data;
  }
  set dataFromService(value) {
    this.dataService.data = value;
  }
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }
  deleteText () {
    this.dataService.data  = '';
    this.searchChange.emit(this.search);
  }
  transformText() {
    this.dataService.data = this.dataService.data.toUpperCase();
    this.searchChange.emit(this.search);
  }

}
