import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/models/hotel';
import { HotelsService } from 'src/app/shared/services/hotels.service';

@Component({
  selector: 'app-hotel-table',
  templateUrl: './hotel-table.component.html',
  styleUrls: ['./hotel-table.component.css']
})
export class HotelTableComponent implements OnInit {

  constructor(private hotelService: HotelsService) { }

  hotels: Array<Hotel> = [];
  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(){
this.hotelService.getAllHotels().subscribe((data:Array<Hotel>):void =>{
  this.hotels =data;
})
  }

  removeHotel(id:string){

  }
}
