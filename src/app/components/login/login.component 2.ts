import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  page = 'login';

  constructor(private router: Router) {}

  submitLogin() {
    this.router.navigate(['/home']);
  }

  changeToSignup() {
    this.page = this.page === 'login' ? 'signup' : 'login';
  }
}
