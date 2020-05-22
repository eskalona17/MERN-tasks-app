import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir pacos", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];
  return (
    <Fragment>
      <h2>Proyecto: paco</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : tareasProyecto.map(tarea => (
            <Tarea tarea={tarea} key={tarea.nombre}/>
        ))}
        
      </ul>
      <button type="button" className="btn btn-eliminar">Eliminar Proyecto &times;</button>
      
    </Fragment>
  );
};

export default ListadoTareas;
