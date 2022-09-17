import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserHttp} from '../../shared/services/user-http.service'
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  loading = false;
  submitted = false;

  constructor(     
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userHttp : UserHttp,
    private alertService : AlertService) {
  }

  

  ngOnInit(): void {
    
  }

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

// onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit
//     this.alertService.clear();

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.userHttp.login(this.f.username.value, this.f.password.value)
//         .pipe(first())
//         .subscribe({
//             next: () => {
//                 // get return url from query parameters or default to home page
//                 const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//                 this.router.navigateByUrl(returnUrl);
//             },
//             error: error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             }
//         });
// }


}
