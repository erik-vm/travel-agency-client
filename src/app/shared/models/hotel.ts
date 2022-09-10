import { City } from "./city";

export interface Hotel {
    UUID: string,
    name: string,
    description: string,
    city: City,
    isActive: boolean
}
