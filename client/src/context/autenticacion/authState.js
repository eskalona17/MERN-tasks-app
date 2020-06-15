import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import clienteAxions from '../../config/axios'

import {
  REGISTRO_EXITO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/index";
import clienteAxios from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async datos => {
      try {
          const respuesta = await clienteAxions.post('/api/usuarios', datos)
          dispatch({
              type: REGISTRO_EXITO,
              payload: respuesta.data
          })

          //obterner el usuario
          usuarioAutenticado();
      } catch (error) {
        //   console.log(error.response.data.msg);
        const alerta = {
            msg: error.response.data.msg,
            categoria: 'alerta-error'
        }
          dispatch({
              type: REGISTRO_ERROR,
              payload: alerta
          })
      }
  }

  //retorna el usuario autenticado
  const usuarioAutenticado = async () => {
      const token = localStorage.getItem('token');
      if(token) {
          // todo: función para enviar el token por headers

      }

      try {
          const respuesta = await clienteAxios.get('/api/auth')
      } catch (error) {
          console.log(error);
          dispatch({
              type: LOGIN_ERROR
          })
      }
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
