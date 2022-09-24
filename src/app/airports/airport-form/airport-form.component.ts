import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/shared/models/city';
import { AirportsService } from 'src/app/shared/services/airports.service';
import { CitiesService } from 'src/app/shared/services/cities.service';

@Component({
  selector: 'app-airport-form',
  templateUrl: './airport-form.component.html',
  styleUrls: ['./airport-form.component.css']
})
export class AirportFormComponent implements OnInit {

isEditing = false;
cities: Array<City> = [];

airportForm : FormGroup = this.fb.group({
  id:null,
  airportName :[null, [Validators.required]] ,
  city : [null, [Validators.required]]
});

  constructor( private router: Router,
    private fb: FormBuilder,
    private airportService: AirportsService,
    private cityService: CitiesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      if(params.id){
        this.isEditing = true;
        this.airportService.getAirportById(params.id).subscribe((data: any) =>{
          this.airportForm.patchValue(data);
        })
      }
    })
    this.getCities();
  }

  onSubmit(): void {
    if (this.airportForm.valid) {
      if (this.isEditing) {
        this.airportService
          .updateAirport(this.airportForm.getRawValue())
          .subscribe(() => {
            this.airportForm.reset();
            this.router.navigate(['/airports']);
          });
      } else {
        this.airportService.createAirport(this.airportForm.getRawValue()).subscribe(() => {
          this.router.navigate(['/airports']);
        });
      }
    } else {
      alert("saving/updating failed!!!");
    }
  }

  getCities():void{
    this.cityService.getAllCities().subscribe((data:Array<City>):void =>{
      this.cities =data;
    })
  }
  
}


