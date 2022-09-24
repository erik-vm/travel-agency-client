import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Trip } from '../models/trip';
import { City } from '../models/city';
import { Airport } from '../models/airport';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private httpClient: HttpClient) { 
  }


  addTrip(trip: Trip){
    return this.httpClient.post(`${environment.baseURL}/trip/`, trip)
  }
  updateTrip(trip: Trip){
    return this.httpClient.post(`${environment.baseURL}/trip/update`, trip)
  }

  removeTripById(id: string){
    return this.httpClient.get(`${environment.baseURL}/trip/delete/id=${id}`)
  }

  restoreTripById(id: string){
    return this.httpClient.get(`${environment.baseURL}/trip/restore/id=${id}`)
  }

  findTripById(id: string) {
    return this.httpClient.get<Trip>(`${environment.baseURL}/trip/id=${id}`);
}
findPromotedTrips(){
  return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/promoted/`)
    }

  findTripByDepartureCity(departureCity : City){
return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/departure_city=${departureCity}`)
  }

  findTripByArrivalCity(arrivalCity : City){
    return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/arrival_city=${arrivalCity}`)
      }

  findTripByDepartureAndArrivalCity(departureCity: City, arrivalCity:City){
        return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/departure_city=${departureCity}/arrival_city=${arrivalCity}`)
      }
 
  findTripByDepartureAirport(departureAirport : Airport){
        return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/departure_airport=${departureAirport}`)
          }
        
  findTripByArrivalAirport(arrivalAirport : Airport){
            return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/arrival_airport=${arrivalAirport}`)
              }
        
  findTripByDepartureAndArrivalAirport(departureAirport: Airport, arrivalAirport:Airport){
                return this.httpClient.get<Trip[]>(`${environment.baseURL}/trip/departure_airport=${departureAirport}/arrival_airport=${arrivalAirport}`)
              }
}
