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
    const activeClass = 'active';
    this.menuLinks.push(
      new MenuItem('about', 'Weather', activeClass),
      new MenuItem('auth', 'Auth module in', activeClass),
      new MenuItem('auth/register', 'Register', activeClass),
      new MenuItem('auth/user-panel', 'USER', activeClass),
    );
  }
  ngOnInit() {}
}
