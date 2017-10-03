import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    public authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      }
    };
  }

  initForm() {
    const minPassLength = 6;
    this.userForm = this.fb.group( {
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(minPassLength)
      ])],
      passwordRepeat: ['', Validators.compose([
        Validators.required,
        Validators.minLength(minPassLength)
      ])]
    },{
      validator: this.matchingPasswords('password', 'passwordRepeat')
    });
    console.log(this.userForm);
  }

  signup() {
    if (this.userForm.valid) {
      this.data.toggleLoading(true);
      this.authService.signup(
        this.userForm.get('email').value,
        this.userForm.get('password').value)
        .then(value => {
          localStorage.setItem('user', value.uid);
          this.data.toggleLoading(false);
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
}
