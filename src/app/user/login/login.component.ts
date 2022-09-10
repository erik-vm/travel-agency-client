import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //AFter request to backend. Save the user pin sessionstorage.

    //sessionStorage.setItem("user", user);
  }

}
