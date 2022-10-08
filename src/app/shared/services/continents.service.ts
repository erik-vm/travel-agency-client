import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Continent } from '../models/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor(private http: HttpClient) { 
  }
  
  private CONTINENT_BASE_URL = 'continent';

  getAllContinents(){
    return this.http.get<Continent[]>(this.CONTINENT_BASE_URL)
  }
  getContinentById(id: string){
    return this.http.get<Continent>(this.CONTINENT_BASE_URL + '/' + id)
  }
  getContinentByName(name: string){
    return this.http.get<Continent>(this.CONTINENT_BASE_URL + '/' + name)
  }


}
