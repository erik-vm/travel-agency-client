import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/shared/models/airport';
import { AirportsService } from 'src/app/shared/services/airports.service';

@Component({
  selector: 'app-airport-table',
  templateUrl: './airport-table.component.html',
  styleUrls: ['./airport-table.component.css']
})
export class AirportTableComponent implements OnInit {

  constructor(private airportService : AirportsService) { }

airports : Array<Airport> = [];

  ngOnInit(): void {
    this.getAirports();
  }


getAirports(){
  this.airportService.getAllAirports().subscribe((data:Array<Airport>): void => {
    this.airports = data
  })
}

removeAirport(id: string):void{
  this.airportService.deleteAirportById(id).subscribe(() => {
    this.getAirports();
  })
}

}
