import React from 'react';
import { CONNECTION } from "../../models/connection";
import { User } from "../../models/user.class.js";
import UserComponent from "../pure/user";


const UserConnection = () => {
    const defaultUser = new User("Nombre", "Apellido", "Email", CONNECTION.CONNECTION);

    const changeState = (id) => {
        console.log("Cambiar estado");
    }

    return (
        <div>
            <div>
                <h1>Usuario:</h1>
            </div>
            {/*TODO: aplicar un for/map para renderizar una lista*/}
            <UserComponent user={defaultUser}></UserComponent>
        </div>
    );
};




export default UserConnection;
