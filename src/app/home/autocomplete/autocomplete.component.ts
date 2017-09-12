import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {WeatherList} from '../../models/weather-list';
import {Subscription} from 'rxjs/Subscription';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  private subs: Subscription [] = [];
  result: WeatherList;
  searchForm: FormGroup;
  searchTerms = new FormControl('', [Validators.required, Validators.minLength(3)]);
  constructor(private fb: FormBuilder, private dataService: DataService) {}
  ngOnInit() {
    this.searchForm = this.fb.group({
      'searchTerms': this.searchTerms,
    });
    const changes = this.searchTerms.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe( value => {
        this.search(value);
      });
    this.subs.push(changes);
  }
  search(value?: string) {
    this.result = null;
    if (this.searchForm.valid) {
      const sub = this.dataService.searchWeahter(value || this.searchTerms.value).subscribe( res => {
        this.result = res;
      });
      this.subs.push(sub);
    }
  }
  ngOnDestroy() {
    for (const sub of this.subs) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }
}
