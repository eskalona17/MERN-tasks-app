import React, { useContext} from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {

  //extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //si no hay proyecto seleccionado
  if(!proyecto) return null;

  //array destruncturing para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = e => {
    e.preventDefault();

    //validar


    //pasar la validacion


    //agregar la nueva tarea al state de tareas

    //reiniciar el form
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            placeholder="Nombre tarea"
            name="nombre"
            className="input-text"
          />
        </div>
        <div className="contenedor-input">
            <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar tarea"/>
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
