export interface IRegisterUserRequest {
    title: string; // title 
    name: string; // name 
    email: string; // email
    password: string; // password
    mobile: string; // mobile
    college: string; // college
    city: string; // city
    isAgree: boolean; //  registering user agree to terms & condition
}