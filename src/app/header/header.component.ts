import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {
  public request: any;
  public isLoading = false;
  public env: any;
  constructor(private dataService: DataService, private http: HttpClient) {
    this.env = environment;
  }

  ngOnInit() {}
}
