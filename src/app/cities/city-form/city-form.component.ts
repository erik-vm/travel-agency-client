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
import { Country } from 'src/app/shared/models/country';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder,
    private countryService: CountriesService,
    private cityService: CitiesService,
    private route: ActivatedRoute) { }

    isEditing = false;
    countries: Array<Country> = [];

    cityForm : FormGroup = this.fb.group({
      id: null,
      cityName : [null, [Validators.required]],
      country: null
    })
  ngOnInit(): void {
    this.getCountries();
  }

  onSubmit(): void{
    if(this.cityForm.valid){
      if(this.isEditing){
        this.cityService.updateCity(this.cityForm.getRawValue()).subscribe(() =>{
          this.cityForm.reset();
          this.router.navigate(['/cities'])
        })
      }else{
        this.cityService.createCity(this.cityForm.getRawValue()).subscribe(() => {
          this.router.navigate(['/cities'])
        })
      }
    }else{
      alert("saving/updating failed!!!")
    }
  }

  getCountries(){
    this.countryService.getAllCountries().subscribe((data:Array<Country>):void =>{
      this.countries = data;
    })
  }

}
