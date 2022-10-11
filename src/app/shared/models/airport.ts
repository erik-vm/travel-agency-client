import { City } from "./city";

export class Airport {
    id: string
    name: string
    city: City
    active: boolean

    constructor(id: string, name: string, city: City, active: boolean) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.active = active;
      }
}
