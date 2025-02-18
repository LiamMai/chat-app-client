import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent {
  constructor() {}

  listSlideImages = [
    '/images/login-phones-item-1.png',
    '/images/login-phones-item-2.png',
    '/images/login-phones-item-3.png',
    '/images/login-phones-item-4.png',
  ];
}
