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
import { Continent } from 'src/app/shared/models/continent';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { ContinentsService } from 'src/app/shared/services/continents.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor( private router: Router,
    private fb: FormBuilder,
    private countryService: CountriesService,
    private continentService: ContinentsService,
    private route: ActivatedRoute) { }

    isEditing = false;
    continents: Array<Continent> = [];

    countryForm : FormGroup = this.fb.group({
      id: null,
      countryName : [null, [Validators.required]],
      continent: null
    })

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      if(params.id){
        this.isEditing = true;
        this.countryService.getCountryById(params.id).subscribe((data: any) =>{
          this.countryForm.patchValue(data);
        })
      }
    });
    this.getContinents();
  }

  onSubmit(): void{
    if(this.countryForm.valid){
      if(this.isEditing){
        this.countryService.updateCountry(this.countryForm.getRawValue()).subscribe(() =>{
          this.countryForm.reset();
          this.router.navigate(['/countries'])
        })
      }else{
        this.countryService.addCountry(this.countryForm.getRawValue()).subscribe(() => {
          this.router.navigate(['/countries'])
        })
      }
    }else{
      alert("saving/updating failed!!!")
    }
  }

  getContinents(){
    this.continentService.getAllContinents().subscribe((data:Array<Continent>):void =>{
      this.continents = data;
    })
  }
}
