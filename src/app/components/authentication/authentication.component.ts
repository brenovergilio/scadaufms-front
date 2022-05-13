import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../template/header/header.service';
import { AuthLogin } from './auth.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authLogin: AuthLogin = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Login',
      icon: 'login',
      routeUrl: '/login'
    }
   }

  ngOnInit(): void {
  }

  login(): void {
    this.authLogin.username = this.authLogin.username.trim();
    this.authService.login(this.authLogin).subscribe((token) => {
      window.localStorage.setItem('jwtToken', token.jwt);
      this.router.navigate(['/']);
    });
  }
}
