import { IUser } from "../entities/user";

export interface IAddItemRequest {
    name: string; // name 
    title: string; // title 
    price: number; // price
    description: string; // description
    sellerEmail: string; // sellerEmail
}