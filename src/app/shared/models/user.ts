import { Authority } from "./authority";

export interface User {
    id : string,
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phoneNumber: string,
    dob: Date,
    isActive: boolean,
    authority: Authority,
    token: string
}
