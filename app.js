const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usruarioRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para poder manejar datos JSON en el cuerpo de la solicitud

// Rutas
app.use('/api/usuarios', usuarioRoutes);

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
