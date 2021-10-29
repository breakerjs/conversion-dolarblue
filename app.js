// Llamado de paquetes
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.use('/', require('./router/rutas'));
app.set("view engine", "ejs");

// Listen Port
app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`);
});