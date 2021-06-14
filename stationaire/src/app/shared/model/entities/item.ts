import { IBaseEntity } from './base-entity';
import { IUser } from './user';

export interface IItem extends IBaseEntity {
    name: string; // name 
    title: string; // title 
    price: number; // price
    description: string; // description
    user: IUser; // user (seller)
}