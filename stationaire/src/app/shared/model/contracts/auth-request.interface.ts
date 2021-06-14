export interface IAuthRequest {
    email: string;
    password: string;
}
export interface IForgotPasswordRequest {
    email: string;
}
export interface IResetPasswordRequest {
    email: string;
    password: string;
    confirmPassword: string;
    token: string;
}
