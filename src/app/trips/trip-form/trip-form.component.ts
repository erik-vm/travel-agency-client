import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from 'src/app/shared/services/trips.service';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

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
    private tripService : TripsService) 
    { }

  ngOnInit(): void {
  }

}
