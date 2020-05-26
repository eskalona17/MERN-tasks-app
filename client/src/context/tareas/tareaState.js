import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir pacos", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir pacos", estado: false, proyectoId: 1 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 2 },
      { nombre: "Elegir colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir pacos", estado: false, proyectoId: 4 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 3 },
    ],
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear las funciones


  //obtener las tareas de un proyecto especifico
  const obtenerTareas = proyectoId => {
      dispatch({
          type: TAREAS_PROYECTO,
          payload: proyectoId
      })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;