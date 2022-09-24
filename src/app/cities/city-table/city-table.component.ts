import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/models/city';
import { CitiesService } from 'src/app/shared/services/cities.service';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {

  constructor(private cityService : CitiesService) { }

  cities : Array<City> = [];

  ngOnInit(): void {
    this.getCities()
  }


  getCities(){
    this.cityService.getAllCities().subscribe((data:Array<City>):void =>{
      this.cities = data
    })
  }
  removeCity(id:string): void{
    this.cityService.restoreCityById(id).subscribe(()=>{
      this.getCities();
    })
  }
}
