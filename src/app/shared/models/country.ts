import { Continent } from "./continent";

export class Country {
    id: string
    name: string
    continent: Continent
    active: boolean

  constructor(id: string, name: string, continent: Continent, active: boolean) {
    this.id = id;
    this.name = name;
    this.continent = continent;
    this.active = active;
  }
}
