import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  public id: string;
  constructor(private acvivatedRoute: ActivatedRoute) {
    this.acvivatedRoute.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
        }
        console.log(params, 'Next');
      },
      error => {
        console.log('Error');
      },
      () => {
        console.log('Complete');
      }
    );
  }
  ngOnInit() {
  }

}
