import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  createHotel(hotel: Hotel){
    return this.http.post(`${environment.baseURL}/hotel`, hotel)
   }
 
   updateHotel(hotel: Hotel){
    return this.http.post(`${environment.baseURL}/hotel/update`, hotel)
       }
 
   deleteHotelById(id: string){
    return this.http.get<Hotel>(`${environment.baseURL}/hotel/restore/id=${id}`)
     }
 
   restoreHotelById(id: string){
    return this.http.get<Hotel>(`${environment.baseURL}/hotel/delete/id=${id}`)
   }
 
   getAllHotels(){
     return this.http.get<Hotel[]>(`${environment.baseURL}/hotel`)
   }
 
   getAllHotelsFromCity(city : City
    ){
     return this.http.get<Hotel[]>(`${environment.baseURL}/hotel/city`)
   }
 
   getHotelById(id: string){
     return this.http.get<Hotel>(`${environment.baseURL}/hotel/id=${id}`)
   }
 
   getHotelByName(name: string){
     return this.http.get<Hotel>(`${environment.baseURL}/hotel/name=${name}`)
   }
}
