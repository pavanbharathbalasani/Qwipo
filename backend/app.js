const express = require('express');
const app = express();
const customerRoutes = require('./routes/customerRoutes');
const addressRoutes = require('./routes/addressRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/api', customerRoutes);
app.use('/api', addressRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
