const express = require('express');
const { getEmprendimientos } = require('../Controlers/emprendimientos');

const router = express.Router();

//rutas
router.get('/', getEmprendimientos);

module.exports = router;