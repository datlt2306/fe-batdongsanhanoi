export interface ILogin {
    id?: string | number,
    email: string,
    password: string,
}
export interface Signup {
    id?: string | number,
    name: string,
    email: string,
    phone: string,
    password: string,
    confirm_password: string
}
export interface ICategorys {
    id: string | number,
    name: string,
    description: string,
}