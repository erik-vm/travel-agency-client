import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/shared/models/city';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { HotelsService } from 'src/app/shared/services/hotels.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder,
   private hotelService : HotelsService,
   private cityService : CitiesService,
    private route: ActivatedRoute) { }

    isEditing = false;
    cities: Array<City> = [];


    hotelForm : FormGroup = this.fb.group({
      id: null,
      hotelName : [null, [Validators.required]],
      city: null
    })

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      if(params.id){
        this.isEditing = true;
        this.hotelService.getHotelById(params.id).subscribe((data: any) =>{
          this.hotelForm.patchValue(data);
        })
      }
    });
    this.getCities();
  }

  onSubmit(): void{
    if(this.hotelForm.valid){
      if(this.isEditing){
        this.hotelService.updateHotel(this.hotelForm.getRawValue()).subscribe(() =>{
          this.hotelForm.reset();
          this.router.navigate(['/hotels'])
        })
      }else{
        this.hotelService.createHotel(this.hotelForm.getRawValue()).subscribe(() => {
          this.router.navigate(['/hotels'])
        })
      }
    }else{
      alert("saving/updating failed!!!")
    }
  }

  getCities(){
    this.cityService.getAllCities().subscribe((data:Array<City>):void =>{
      this.cities = data;
    })
  }

}
