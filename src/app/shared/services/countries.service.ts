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

  private AIRPORT_BASE_URL = 'airport/';

  addCountry(country: Country){
    return this.httpClient.post(`${environment.baseURL}/country/`, country)
  }
  updateCountry(country: Country){
    return this.httpClient.post(`${environment.baseURL}/country/update`, country)
  }

  removeCountryById(id: string){
    return this.httpClient.get(`${environment.baseURL}/country/delete/` + id)
  }

  restoreCountryById(id: string){
    return this.httpClient.get(`${environment.baseURL}/country/restore/` + id)
  }

  getAllCountries(){
    return this.httpClient.get<Country[]>(`${environment.baseURL}/country`)
  }
  getCountryById(id: string){
    return this.httpClient.get(`${environment.baseURL}/country/` + id)
  }
  getCountryByName(name: string){
    return this.httpClient.get(`${environment.baseURL}/country/find-by-name?name=` + name)
  }
}
