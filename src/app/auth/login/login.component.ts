import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {UserForm} from '../user-form';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {ConfigService} from "../../config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserForm = new UserForm();

  constructor(
    private router: Router,
    private cfg: ConfigService,
    private route: ActivatedRoute,
    private data: DataService,
    public authService: AuthService) {}

  ngOnInit() {
    console.log(ConfigService.counter);
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['../user-panel'], {
        relativeTo: this.route
      });
    }
  }
  login() {
    this.data.toggleLoading(true);
    this.authService.login(this.user.email, this.user.password)
      .then(value => {
        this.data.toggleLoading(false);
        localStorage.setItem('user', value.uid);
        this.router.navigate(['../user-panel'], {
          relativeTo: this.route
        });
      })
      .catch(err => {
        this.data.toggleLoading(false);
        alert(err.message);
      });
  }


}
