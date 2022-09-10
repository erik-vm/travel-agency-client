import { Country } from "./country";

export interface City {
    UUID: string,
    name: string,
    country: Country
    isActive: boolean
}
