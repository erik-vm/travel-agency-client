import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/models/country';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {

  constructor(private countryService : CountriesService) { }

countries : Array<Country> = [];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.countryService.getAllCountries().subscribe((data:Array<Country>):void =>{
      this.countries = data
    })
  }
  removeCountry(id:string): void{
    this.countryService.removeCountryById(id).subscribe(()=>{
      this.getCountries();
    })
  }

}
