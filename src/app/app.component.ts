import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {QueryParameter} from "./models/query-parameter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  get dataFromService() {
    return this.dataService.data;
  }
  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromServer();
    const idObject = new QueryParameter('id', '524901');
    console.log(this.dataService.formApiString([idObject]));
  }
  private getDataFromServer() {
   // this.http.get()
    console.log(environment);
  }
}
