import {
  REGISTRO_EXITO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITO:
      case LOGIN_EXITO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };
    default:
      return state;
  }
};
