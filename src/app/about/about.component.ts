import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {fadeInOut, slideInOutAnimation} from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOutAnimation()]
})
export class AboutComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') animation;
  public id: string;
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
