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

  private TRIP_BASE_URL = 'trip';

  addTrip(trip: Trip){
    return this.httpClient.post(this.TRIP_BASE_URL, trip)
  }
  updateTrip(trip: Trip){
    return this.httpClient.post(this.TRIP_BASE_URL + '/update', trip)
  }

  removeTripById(id: string){
    return this.httpClient.get(this.TRIP_BASE_URL + '/delete/' + id)
  }

  restoreTripById(id: string){
    return this.httpClient.get(this.TRIP_BASE_URL + '/restore/' + id)
  }

  findTripById(id: string) {
    return this.httpClient.get<Trip>(this.TRIP_BASE_URL + '/' + id);
}
findPromotedTrips(){
  return this.httpClient.get<Trip[]>(this.TRIP_BASE_URL + '/promoted/')
    }

  findTripByDepartureCity(departureCity : City){
return this.httpClient.get<Trip[]>(this.TRIP_BASE_URL  )
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
