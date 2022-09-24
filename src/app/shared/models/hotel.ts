import { City } from "./city";

export interface Hotel {
    id: string,
    name: string,
    description: string,
    city: City,
    isActive: boolean
}
