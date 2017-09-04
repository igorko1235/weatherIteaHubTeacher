import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hideTitle = false;
  get dataFromService() {
    return this.dataService.data;
  }
  constructor(private dataService: DataService) {}

  ngOnInit() {
  }
  toggle() {
    this.hideTitle = !this.hideTitle;
  }
}
