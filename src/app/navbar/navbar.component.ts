import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
