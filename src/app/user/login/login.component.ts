import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(  private router: Router,
      private fb: FormBuilder,
      private httpService: HttpService,
      private authService: AuthService) { 
  }

  loginForm: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })



  ngOnInit(): void {
    //AFter request to backend. Save the user pin sessionstorage.

    //sessionStorage.setItem("user", user);
  }
  
  login(){
    this.authService.login()
  }

}
