const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const actionRoutes = require('./routes/actionRoutes');
const applicationStatusRoutes = require('./routes/applicationStatusRoutes');
const changeHistoryRoutes = require('./routes/changeHistoryRoutes');
const cityRoutes = require('./routes/cityRoutes');
const countryRoutes = require('./routes/countryRoutes');
const entityRoutes = require('./routes/entityRoutes');
const jobApplicationRoutes = require('./routes/jobApplicationRoutes');
const jobCategoryRoutes = require('./routes/jobCategoryRoutes');
const jobOfferRoutes = require('./routes/jobOfferRoutes');
const modalityRoutes = require('./routes/modalityRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoleRoutes = require('./routes/userRoleRoutes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/actions', actionRoutes);
app.use('/api/applicationStatuses', applicationStatusRoutes);
app.use('/api/changeHistories', changeHistoryRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/entities', entityRoutes);
app.use('/api/jobApplications', jobApplicationRoutes);
app.use('/api/jobCategories', jobCategoryRoutes);
app.use('/api/jobOffers', jobOfferRoutes);
app.use('/api/modalities', modalityRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/userRoles', userRoleRoutes);

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
