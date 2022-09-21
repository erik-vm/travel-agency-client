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
  private continentSubject: BehaviorSubject<Continent>;
  public continent: Observable<Continent>;

  constructor(private httpClient: HttpClient) { 
    this.continentSubject = new BehaviorSubject<Continent>(JSON.parse(localStorage.getItem('continent')));
    this.continent = this.continentSubject.asObservable();
  }
  public get continentValue(): Continent{
    return this.continentSubject.value;
  }

  getAllContinents(){
    return this.httpClient.get<Continent[]>(`${environment.baseURL}/continent`)
  }
  getContinentById(id: string){
    return this.httpClient.get<Continent>(`${environment.baseURL}/continent/${id}`)
  }
  getContinentByName(name: string){
    return this.httpClient.get<Continent>(`${environment.baseURL}/continent/name=${name}`)
  }


}
