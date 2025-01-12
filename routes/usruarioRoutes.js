const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioControllers');

// Endpoint para obtener todos los usuarios
router.get('/', usuarioController.getAllUsuarios);

// Endpoint para crear un nuevo usuario
router.post('/', usuarioController.createUsuario);

// Endpoint para obtener un usuario por ID
router.get('/:id', usuarioController.getUsuarioById);

// Endpoint para actualizar un usuario
router.put('/:id', usuarioController.updateUsuario);

// Endpoint para eliminar un usuario
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
