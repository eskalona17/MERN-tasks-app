import React from 'react';

const Login = () => {
    const onChange = () => {

    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form action="">
                    <div className="campo-form">
                        <label htmlFor="">Email</label>
                        <input type="email" id="email" name="email" placeholder="email" onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="">Password</label>
                        <input type="password" id="password" name="password" placeholder="password" onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión"/>
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Login;