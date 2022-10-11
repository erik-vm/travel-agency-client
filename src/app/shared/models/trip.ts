import { DecimalPipe } from "@angular/common";
import { Airport } from "./airport";
import { City } from "./city";
import { Hotel } from "./hotel";


export class Trip {
    id: string
    departureCity: City
    arrivalCity: City
    departureAirport: Airport
    arrivalAirport: Airport
    arrivalHotel: Hotel
    hotelBasis: string
    departureDate: Date
    returnDate: Date
    numberOfDays: BigInt
    priceForAdult: DecimalPipe
    priceForChild: DecimalPipe
    promoted: boolean
    bedForAdults: BigInt
    bedForChildren: BigInt
    active: boolean
    timesBooked: BigInt

    constructor(id: string, departureCity: City, arrivalCity: City, departureAirport: Airport, arrivalAirport: Airport, arrivalHotel: Hotel, hotelBasis: string, departureDate: Date, returnDate: Date, numberOfDays: BigInt, priceForAdult: DecimalPipe, priceForChild: DecimalPipe, promoted: boolean, bedForAdults: BigInt,   bedForChildren: BigInt, active: boolean) {
        this.id = id;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureAirport =departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.arrivalHotel = arrivalHotel;
        this.hotelBasis = hotelBasis;
        this.departureDate =departureDate;
        this.returnDate = returnDate;
        this.numberOfDays= numberOfDays;
        this.priceForAdult = priceForAdult;
        this.priceForChild = priceForChild;
        this.promoted = promoted;
        this.bedForAdults = bedForAdults;
        this.bedForChildren =bedForChildren;
        this.active = active;
      }
}
