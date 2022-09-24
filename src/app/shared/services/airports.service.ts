import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../models/airport';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  
  constructor(private http: HttpClient) {  }

  createAirport(airport: Airport){
   return this.http.post(`${environment.baseURL}/airport`, airport)
  }

  updateAirport(airport: Airport){
   return this.http.post(`${environment.baseURL}/airport/update`, airport)
      }

  deleteAirportById(id: string){
   return this.http.get<Airport>(`${environment.baseURL}/airport/restore/id=${id}`)
    }

  restoreAirportById(id: string){
   return this.http.get<Airport>(`${environment.baseURL}/airport/delete/id=${id}`)
  }

  getAllAirports(){
    return this.http.get<Airport[]>(`${environment.baseURL}/airport`)
  }

  getAllAirportsFromCity(city : City){
    return this.http.get<Airport[]>(`${environment.baseURL}/airport/city`)
  }

  getAirportById(id: string){
    return this.http.get<Airport>(`${environment.baseURL}/airport/id=${id}`)
  }

  getAirportByName(name: string){
    return this.http.get<Airport>(`${environment.baseURL}/airport/name=${name}`)
  }
}
