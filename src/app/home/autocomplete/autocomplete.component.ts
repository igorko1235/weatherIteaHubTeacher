import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  searchTerms = '';
  result: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }
  search() {
    this.result = null;
    this.dataService.searchWeahter(this.searchTerms).subscribe( res => {
      this.result = res;
    });
  }
}
