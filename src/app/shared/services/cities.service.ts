import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }


      createCity(city: City){
       return this.http.post(`${environment.baseURL}/city`, city)
      }
    
      updateCity(city: City){
       return this.http.post(`${environment.baseURL}/city/update`, city)
          }
    
      deleteCityById(id: string){
       return this.http.get<City>(`${environment.baseURL}/city/restore/id=${id}`)
          }
    
      restoreCityById(id: string){
        return this.http.get<City>(`${environment.baseURL}/city/delete/id=${id}`)
          }
    
      getAllCities(){
        return this.http.get<City[]>(`${environment.baseURL}/city`)
      }
    
      getAllCitiesFromCountry(country : Country){
        return this.http.get<City[]>(`${environment.baseURL}/city/country`)
      }
    
      getCityById(id: string){
        return this.http.get<City>(`${environment.baseURL}/city/id=${id}`)
      }
    
      getCityByName(name: string){
        return this.http.get<City>(`${environment.baseURL}/city/name=${name}`)
      }


}
