import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navigation = [
    {label: 'Login', path:'/login'},
    {label: 'Register', path:'/register'}
  ]

  isClient: boolean = false;
  isAdmin: boolean = false;

  //user: User = sessionStorage.getItem("user");

  constructor() { }

  ngOnInit(): void {
  }

}
