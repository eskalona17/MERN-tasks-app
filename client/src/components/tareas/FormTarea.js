import React, { useContext, useState, useEffect } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener la funcion del context de tareas
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
  } = tareasContext;

  //effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //extraer el nombre del proyecto
  const { nombre } = tarea;

  //si no hay proyecto seleccionado
  if (!proyecto) return null;

  //array destruncturing para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //pasar la validacion
    //erortarea:false en tareareducer

    //agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //obtener y filtar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            placeholder="Nombre tarea"
            name="nombre"
            className="input-text"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
