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

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( positions => {
        this.handlePosition(positions);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  search() {
    // const request = new HttpParams()
    //   .set('appid', environment.BASE_API_KEY)
    //   .set('q', 'London')
    //   .set('type', 'like');
    this.http.get('http://samples.openweathermap.org/data/2.5/find?q=Lv&appid=b1b15e88fa797225412429c1c50c122a1').subscribe( request => {
      console.log(request);
    });
  }
  handlePosition(position: Position) {
    // this.isLoading = true;
    // const request = new HttpParams()
    //   .set('appid', environment.BASE_API_KEY)
    //   .set('lat', Math.round(position.coords.latitude).toString())
    //   .set('lon', Math.round(position.coords.longitude).toString());
    // this.http.get(environment.BASE_API_URL, {params: request}).subscribe( request => {
    //   this.request = request;
    //   console.log(this.request);
    //   this.isLoading = false;
    // });
  }
}
