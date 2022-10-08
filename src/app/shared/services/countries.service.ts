import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { 
  }

  private COUNTRY_BASE_URL = 'country';

  addCountry(country: Country){
    return this.httpClient.post(this.COUNTRY_BASE_URL, country)
  }
  updateCountry(country: Country){
    return this.httpClient.post(this.COUNTRY_BASE_URL + '/update', country)
  }

  removeCountryById(id: string){
    return this.httpClient.get(this.COUNTRY_BASE_URL + '/delete/' + id)
  }

  restoreCountryById(id: string){
    return this.httpClient.get(this.COUNTRY_BASE_URL + '/restore/' + id)
  }

  getAllCountries(){
    return this.httpClient.get<Country[]>(this.COUNTRY_BASE_URL)
  }
  getCountryById(id: string){
    return this.httpClient.get(this.COUNTRY_BASE_URL + '/' + id)
  }
  getCountryByName(name: string){
    return this.httpClient.get(this.COUNTRY_BASE_URL + '/find-by-name?name=' + name)
  }
}
