import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  list$: FirebaseListObservable <any []>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    public authService: AuthService) {}
  ngOnInit() {
    this.list$ = this.db.list('cities');
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['../login'], {
      relativeTo: this.route
    });
    this.authService.logout();
  }
}
