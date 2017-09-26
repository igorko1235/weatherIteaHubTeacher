import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public id: string;
  // @HostBinding('@slideInOutAnimation') slideInOutAnimation;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
        }
      }
    );
  }
}
