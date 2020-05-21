import React from "react";

const FormTarea = () => {
  return (
    <div className="formulario">
      <form action="">
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
