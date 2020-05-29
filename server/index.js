const express = require("express");
const conectarDB = require("./config/db");

// crear el servidor
const app = express();

//conectar a la bbdd
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))

//definir la pagina principal
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

//arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});