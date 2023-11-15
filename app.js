
// Require packages and set the port
const express = require('express');
const port = 3002;

// Permitir manejo de POST Y PUT 
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

// Usar Node.js body parsing middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Iniciar el servidor
const server = app.listen(port, (error) => {

    if (error) return console.log(`Error: ${error}`);

    console.log(`El serviidor escucha en el puerto ${server.address().port}`);
})





