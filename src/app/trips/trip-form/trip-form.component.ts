import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from 'src/app/shared/models/airport';
import { City } from 'src/app/shared/models/city';
import { Hotel } from 'src/app/shared/models/hotel';
import { AirportsService } from 'src/app/shared/services/airports.service';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { HotelsService } from 'src/app/shared/services/hotels.service';
import { TripsService } from 'src/app/shared/services/trips.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  isEditing = false;
  cities: Array<City> = [];
  airports : Array<Airport> = [];
  hotels : Array<Hotel> = [];
  

  tripForm: FormGroup = this.fb.group({
    id: null,
    departureAirport: [null, [Validators.required]],
    destinationAirport: [null, [Validators.required]],
    arrivalHotel: null,
    hotelBasis: null,
    priceForAdult: null,
    priceForChildren: null,
    promoted: null
  })

  constructor(   
    private router: Router,
    private fb: FormBuilder,
    private tripService : TripsService,
    private cityService : CitiesService,
    private airportService : AirportsService,
    private hotelService : HotelsService,
    private route: ActivatedRoute) 
    { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      if(params.id){
        this.isEditing = true;
        this.tripService.findTripById(params.id).subscribe((data: any) =>{
          this.tripForm.patchValue(data);
        })
      }
    })
    this.getCities();
    this.getAirport();
    this.getHotels();
  }

  onSubmit(): void {
    if (this.tripForm.valid) {
      if (this.isEditing) {
        this.tripService
          .updateTrip(this.tripForm.getRawValue())
          .subscribe(() => {
            this.tripForm.reset();
            this.router.navigate(['/trips']);
          });
      } else {
        this.tripService.addTrip(this.tripForm.getRawValue()).subscribe(() => {
          this.router.navigate(['/trips']);
        });
      }
    } else {
      alert("saving/updating failed!!!");
    }
  }


  getCities():void{
    this.cityService.getAllCities().subscribe((data:Array<City>):void =>{
      this.cities =data;
    })
  }

  getAirport():void{
    this.airportService.getAllAirports().subscribe((data:Array<Airport>):void =>{
      this.airports =data;
    })
  }

  getHotels():void{
    this.hotelService.getAllHotels().subscribe((data:Array<Hotel>):void =>{
      this.hotels =data;
    })
  }
}
