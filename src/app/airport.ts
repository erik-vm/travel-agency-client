import { City } from "./city";

export interface Airport {
    UUID: string,
    city: City,
    isActive: boolean
}
