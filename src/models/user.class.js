import { CONNECTION } from "./connection";
export class User {
    name = "";
    surname = "";
    email = "";
    connected = CONNECTION.CONNECTED;

    constructor(name, surname, email, connected){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.connected = connected;
    }
}