import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const request = new HttpParams()
          .set('lon', position.coords.longitude.toString())
          .set('lat', position.coords.latitude.toString());
        this.dataService.makeRequestToServer(request).subscribe(request => {
          console.log(request);
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
