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

  private CITY_BASE_URL = 'city';

      createCity(city: City){
       return this.http.post(this.CITY_BASE_URL, city)
      }
    
      updateCity(city: City){
       return this.http.post(this.CITY_BASE_URL + '/update', city)
          }
    
      deleteCityById(id: string){
       return this.http.get<City>(this.CITY_BASE_URL + '/delete/' + id)
          }
    
      restoreCityById(id: string){
        return this.http.get<City>(this.CITY_BASE_URL + '/restore/' + id)
          }
    
      getAllCities(){
        return this.http.get<City[]>(this.CITY_BASE_URL)
      }
    
      getAllCitiesFromCountry(country : Country){
        return this.http.post<City[]>(this.CITY_BASE_URL + '/country', country)
      }
    
      getCityById(id: string){
        return this.http.get<City>(this.CITY_BASE_URL + '/' + id)
      }
    
      getCityByName(name: string){
        return this.http.get<City>(this.CITY_BASE_URL + '/find-by-name?name=' +name)
      }


}
