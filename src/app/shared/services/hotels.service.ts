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

  private HOTEL_BASE_URL = 'hotel';

  createHotel(hotel: Hotel){
    return this.http.post(this.HOTEL_BASE_URL, hotel)
   }
 
   updateHotel(hotel: Hotel){
    return this.http.post(this.HOTEL_BASE_URL + '/update', hotel)
       }
 
   deleteHotelById(id: string){
    return this.http.get<Hotel>(this.HOTEL_BASE_URL + '/delete/' + id)
     }
 
   restoreHotelById(id: string){
    return this.http.get<Hotel>(this.HOTEL_BASE_URL + '/restore/' + id)
   }
 
   getAllHotels(){
     return this.http.get<Hotel[]>(this.HOTEL_BASE_URL)
   }
 
   getAllHotelsFromCity(city : City
    ){
     return this.http.post<Hotel[]>(this.HOTEL_BASE_URL + '/city', city)
   }
 
   getHotelById(id: string){
     return this.http.get<Hotel>(this.HOTEL_BASE_URL + '/' + id)
   }
 
   getHotelByName(name: string){
     return this.http.get<Hotel>(this.HOTEL_BASE_URL + '/find-by-name?name=' + name)
   }
}
