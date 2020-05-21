import React from 'react';
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header';
import FormTarea from '../tareas/FormTarea';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Header/>
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;