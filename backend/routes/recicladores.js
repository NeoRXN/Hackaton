//ruta para crear usuarios generadores
const express = require('express');
const router = express.Router();
const recicladorController = require('../controllers/recicladorController');

// Crear Usuarios recicladores
// api/recicladores

router.post('/', 
recicladorController.crearRecolector
);

module.exports=router;