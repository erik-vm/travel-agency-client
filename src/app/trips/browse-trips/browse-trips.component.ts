import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/shared/models/trip';
import { TripsService } from 'src/app/shared/services/trips.service';


@Component({
  selector: 'app-browse-trips',
  templateUrl: './browse-trips.component.html',
  styleUrls: ['./browse-trips.component.css']
})
export class BrowseTripsComponent implements OnInit {

  trips: Array<Trip> = [];

  constructor(private tripService : TripsService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  removeTrip(id: string): void{
    this.tripService.removeTripById(id).subscribe(()=> {
      this.getTrips();
    })
  }

  getTrips() : void{
    this.tripService.findPromotedTrips().subscribe((data : Array <Trip>) : void => {
      this.trips = data;
    })
  }

}
