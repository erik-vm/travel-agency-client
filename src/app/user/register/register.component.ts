import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserHttp} from '../../shared/services/user-http.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup = this.fb.group({
  id: null,
  firstName: [null, [Validators.required]],
  lastName: [null, [Validators.required]],
  address: null,
  phoneNumber: null,
  dob: null,
  email: [null, [Validators.required, Validators.email]],
  password: [null,[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]],
  confirmPassword: [null,[Validators.required]]
})

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userHttp: UserHttp
  ) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.registerForm.valid){
      this.userHttp.register(this.registerForm.getRawValue()).subscribe(()=>{
        this.router.navigate(['/login']);
      });
    }else{
      alert("Registering new user failed!")
    }
  }


}
