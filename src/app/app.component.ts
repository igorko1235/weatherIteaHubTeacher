import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private conf: ConfigService) {}
  ngOnInit() {
    console.log(ConfigService.counter);
  }
}
