import { Continent } from "./continent";

export interface Country {
    UUID: string,
    name: string,
    continent: Continent
    isActive: boolean
}
