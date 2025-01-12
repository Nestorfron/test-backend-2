const Usuario = require('../models/usuario');

// Obtener todos los usuarios
const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo usuario
const createUsuario = async (req, res) => {
  const { nombre, correo_electronico, contraseña, estado, telefono, direccion, ID_ciudad } = req.body;

  try {
    const newUsuario = await Usuario.create({
      nombre,
      correo_electronico,
      contraseña,
      estado,
      telefono,
      direccion,
      ID_ciudad
    });
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario por ID
const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo_electronico, contraseña, estado, telefono, direccion, ID_ciudad } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      usuario.nombre = nombre || usuario.nombre;
      usuario.correo_electronico = correo_electronico || usuario.correo_electronico;
      usuario.contraseña = contraseña || usuario.contraseña;
      usuario.estado = estado || usuario.estado;
      usuario.telefono = telefono || usuario.telefono;
      usuario.direccion = direccion || usuario.direccion;
      usuario.ID_ciudad = ID_ciudad || usuario.ID_ciudad;

      await usuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un usuario por ID
const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
};
