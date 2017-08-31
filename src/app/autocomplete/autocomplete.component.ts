import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() search: string;
  @Output() searchChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  deleteText () {
    this.search  = '';
    this.searchChange.emit(this.search);
  }
  transformText() {
    this.search = this.search.toUpperCase();
    this.searchChange.emit(this.search);
  }

}
