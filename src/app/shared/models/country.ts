import { Continent } from "./continent";

export interface Country {
    id: string,
    name: string,
    continent: Continent
    active: boolean
}
