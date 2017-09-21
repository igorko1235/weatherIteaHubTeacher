import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../models/menu-item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuLinks: MenuItem [] = [];
  constructor() {
    this.menuLinks.push(
      new MenuItem('about', 'About', 'active'),
      new MenuItem('auth', 'Login', 'active'),
    );
  }
  ngOnInit() {}
}
