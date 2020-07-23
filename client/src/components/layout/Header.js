import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext'

const Header = () => {

        //extraer la información de autenticación
        const authContext = useContext(AuthContext);
        const { usuario, usuarioAutenticado } = authContext;
    
        useEffect(() => {
            usuarioAutenticado()
        }, [])
    

    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null}
            
            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
     );
}
 
export default Header;