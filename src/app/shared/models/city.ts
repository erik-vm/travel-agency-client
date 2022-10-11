import { Country } from "./country";

export class City {
    id: string
    name: string
    country: Country
    active: boolean

    constructor(id: string, name: string, country: Country, active: boolean) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.active = active;
      }
}
