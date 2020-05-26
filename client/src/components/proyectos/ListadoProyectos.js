import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {

  //extraer del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos()
  },[])

  //revisar si proyectos tiene contenido
  if (proyectos.length === 0) return <p>No hay proyectos. Comienza uno</p>;

 

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
