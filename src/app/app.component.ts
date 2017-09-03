import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {QueryParameter} from "./models/query-parameter";

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
    this.getDataFromServer();
  }
  toggle() {
    this.hideTitle = !this.hideTitle;
  }
  private getDataFromServer() {
    const idObject = new QueryParameter('id', '524901');
    // this.dataService.makeRequestToServer(idObject).subscribe(request => {
    //   console.log(request);
    // });
  }
}
