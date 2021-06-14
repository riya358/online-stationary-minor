import { IUser } from '../entities/user';

export interface ICurrentUser {
    token: string;
    user: IUser;
}
