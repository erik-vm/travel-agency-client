import { DecimalPipe } from "@angular/common";
import { City } from "./city";


export interface Trip {
    UUID: string,
    departureCity: City,
    destinationCity: City,
    departureDate: Date,
    returnDate: Date,
    numberOfDays: BigInt,
    type: string,
    priceForAdult: DecimalPipe,
    priceForChild: DecimalPipe,
    promoted: boolean,
    bedForAdults: BigInt,
    bedForChildren: BigInt,
    isActive: boolean;
}
