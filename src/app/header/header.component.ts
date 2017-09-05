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

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    console.log(this);
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this => {
    //     // const request = new HttpParams()
    //     //   .set('lon', position.coords.longitude.toString())
    //     //   .set('lat', position.coords.latitude.toString());
    //     // this.dataService.makeRequestToServer(request).subscribe(request => {
    //     //   console.log(request);
    //     // });
    //   });
    // } else {
    //   alert('Geolocation is not supported by this browser.');
    // }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( positions => {
        this.handlePosition(positions);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  handlePosition(position: Position) {
    console.log(position);
    const request = new HttpParams()
      .set('appid', environment.BASE_API_KEY)
      .set('lat', position.coords.latitude.toString())
      .set('lon', position.coords.longitude.toString());
    this.http.get(environment.BASE_API_URL, {params: request}).subscribe( request => {
      console.log(request);
    });
  }
}
