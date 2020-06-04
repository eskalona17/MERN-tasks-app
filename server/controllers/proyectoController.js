const Proyecto = require('../models/Proyecto')

exports.crearProyecto = async(req, res) => {
    try {
        //crear nuevo proyecto
        const proyecto = new Proyecto(req.body);

        //guardar el creador via jwt
        proyecto.creador = req.usuario.id;

        //guardamos el proyecto
        proyecto.save();
        res.json(proyecto)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor')
    }
}