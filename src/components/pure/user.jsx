import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../../models/user.class';

const UserComponent = ({  user }) => {
    return (
        <div>
            <h2>
              Nombre: { user.name }
            </h2>
            <h3>
              Apellido: { user.surname }
            </h3>
            <h4>
              Email: { user.email }
            </h4>
            <h5>
              El usuario esta: { user.completed ? "En Línea" : "No Disponible" }
            </h5>
        </div>
    );
};


UserComponent.propTypes = {
    user: PropTypes.instanceOf(User)
};


export default User;
