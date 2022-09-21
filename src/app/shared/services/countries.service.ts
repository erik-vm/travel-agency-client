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
  private countrySubject: BehaviorSubject<Country>;
  public country: Observable<Country>;

  constructor(private httpClient: HttpClient, private router : Router) { 
    this.countrySubject = new BehaviorSubject<Country>(JSON.parse(localStorage.getItem('continent')));
    this.country = this.countrySubject.asObservable();
  }
  public get countryValue(): Country{
    return this.countrySubject.value;
  }

  addCountry(country: Country){
    return this.httpClient.post(`${environment.baseURL}/country/`, country)
  }
  updateCountry(country: Country){
    return this.httpClient.post(`${environment.baseURL}/country/update`, country)
  }

  removeCountryById(id: string){
    return this.httpClient.get(`${environment.baseURL}/country/delete/${id}`)
  }

  restoreCountryById(id: string){
    return this.httpClient.get(`${environment.baseURL}/country/restore/${id}`)
  }

  getAllCountries(){
    return this.httpClient.get<Country[]>(`${environment.baseURL}/country`)
  }
  getCountryById(id: string){
    return this.httpClient.get<Country>(`${environment.baseURL}/country/${id}`)
  }
  getCountryByName(name: string){
    return this.httpClient.get<Country>(`${environment.baseURL}/country/name=${name}`)
  }
}
