import React, { useContext } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {

  //extraer del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;


  //revisar si proyectos tiene contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
