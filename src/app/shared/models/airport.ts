import { City } from "./city";

export interface Airport {
    id: string,
    name: string,
    city: City,
    isActive: boolean
}
