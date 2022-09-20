import { City } from "./city";

export interface Airport {
    UUID: string,
    name: string,
    city: City,
    isActive: boolean
}
