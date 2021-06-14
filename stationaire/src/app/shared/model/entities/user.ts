import { IBaseEntity } from './base-entity';
import { IFile } from './file';

export interface IUser extends IBaseEntity {
    title: string; // title 
    name: string; // name 
    email: string; // email
    password: string; // password
    mobile: string; // mobile
    isActive: boolean; // Is account active
    profile: IFile; // TODO: not implemented yet
    college: string; // college
    branch: string; // branch TODO: not added in the profile yet
    city: string; // city
}