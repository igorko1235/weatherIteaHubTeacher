import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {fadeInOut} from '../animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [fadeInOut(500)],
})
export class LoaderComponent implements OnInit {
  public isShow = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.listenToogling().subscribe( isShow  => {
      this.isShow = isShow;
    });
  }
}
