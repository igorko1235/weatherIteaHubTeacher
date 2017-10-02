import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {UserForm} from '../user-form';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserForm = new UserForm();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    public authService: AuthService) {}

  ngOnInit() {
  }

  signup() {
    this.data.toggleLoading(true);
    this.authService.signup(this.user.email, this.user.password)
      .then(value => {
        localStorage.setItem('user', value.uid);
        this.data.toggleLoading(false);
        this.router.navigate(['../user-panel'], {
          relativeTo: this.route
        });
      })
      .catch(err => {
        this.data.toggleLoading(false);
        console.log('Something went wrong:', err.message);
      });
  }

}
