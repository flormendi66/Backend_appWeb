const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors');
dotenv.config(); //colocarlo ACÁ!!!!
//import rutas
//const routerPropiedades = require('../Routes/propiedades');

const app = express();

app.use(express.json()); //middleware para manejo de json en las solicitudes
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello from Express on Vercel!');
});
//app.use('/propiedades', routerPropiedades);

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto: ${port}`);
});

module.exports = app;  // Necesario para Vercel