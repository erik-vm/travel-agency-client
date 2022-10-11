import { City } from "./city";

export class Hotel {
    id: string
    name: string
    description: string
    city: City
    active: boolean

    constructor(id: string, name: string, description: string ,city: City, active: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.city = city;
        this.active = active;
      }
}
