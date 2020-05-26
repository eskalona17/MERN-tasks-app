import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";

import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //si no hay proyecto seleccionado
  if(!proyecto) return <h2>Selecciona un proyecto</h2>

  //array destruncturing para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    
  ];

  const onClickEliminar =  () => {
    eliminarProyecto(proyectoActual.id)
  }
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : tareasProyecto.map(tarea => (
            <Tarea tarea={tarea} key={tarea.nombre}/>
        ))}
        
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>Eliminar Proyecto &times;</button>
      
    </Fragment>
  );
};

export default ListadoTareas;
