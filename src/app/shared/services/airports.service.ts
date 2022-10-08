import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../models/airport';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {
  private AIRPORT_BASE_URL = 'airport';
  
  constructor(private http: HttpClient) {  }

  createAirport(airport: Airport){
   return this.http.post(this.AIRPORT_BASE_URL, airport)
  }

  updateAirport(airport: Airport){
   return this.http.post(this.AIRPORT_BASE_URL + '/update', airport)
      }

  deleteAirportById(id: string){
   return this.http.get<Airport>(this.AIRPORT_BASE_URL + '/delete/' + id)
    }

  restoreAirportById(id: string){
   return this.http.get<Airport>(this.AIRPORT_BASE_URL + '/restore/' + id)
  }

  getAllAirports(){
    return this.http.get<Airport[]>(this.AIRPORT_BASE_URL)
  }

  getAllAirportsFromCity(city : City){
    return this.http.get<Airport[]>(this.AIRPORT_BASE_URL + 'city?name=' + city)
  }

  getAirportById(id: string){
    return this.http.get<Airport>(this.AIRPORT_BASE_URL + "/" + id)
  }

  getAirportByName(name: string){
    return this.http.get<Airport>(this.AIRPORT_BASE_URL + "/" + name)
  }
}
