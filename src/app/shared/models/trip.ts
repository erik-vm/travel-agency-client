import { DecimalPipe } from "@angular/common";
import { Airport } from "./airport";
import { City } from "./city";
import { Hotel } from "./hotel";


export interface Trip {
    UUID: string,
    departureCity: City,
    arrivalCity: City,
    departureAirport: Airport,
    arrivalAirport: Airport,
    arrivalHotel: Hotel,
    hotelBasis: string,
    departureDate: Date,
    returnDate: Date,
    numberOfDays: BigInt,
    priceForAdult: DecimalPipe,
    priceForChild: DecimalPipe,
    promoted: boolean,
    bedForAdults: BigInt,
    bedForChildren: BigInt,
    isActive: boolean,
    timesBooked: BigInt
}
