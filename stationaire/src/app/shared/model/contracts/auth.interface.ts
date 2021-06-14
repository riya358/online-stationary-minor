import { IUser } from '../entities/user';

export interface IRegisterResponse {
    result: AuthResult;
    token: string;
    user: IUser;
}

export interface ILoginResponse {
    result: AuthResult;
    token: string;
    user: IUser;
}

export enum AuthResult {
    None = 'none',
    InvalidEmailPassword = 'invalidEmailPassword',
    Ok = 'ok'
}

export enum StorageTypes {
    CurrentUser = "currentUser"
}

