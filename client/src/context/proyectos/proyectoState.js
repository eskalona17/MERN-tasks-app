import React, { useReducer } from "react";

import { v4 as uuid } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "paco" },
    { id: 3, nombre: "ramon" },
  ];
  const initalState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initalState);

  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    //agregamos un id al proyecto
    proyecto.id = uuid();

    //insertamos el proyecto en el state con dispatch
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //validar el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //selecciona el proyecto que el usuario dio click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  //Eliminar un proyecto
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
