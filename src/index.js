require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// IMPORTACIÓN Y CONFIGURACIÓN DE RUTAS
const ticketRoutes = require('./routes/ticketRoutes');
app.use('/tickets', ticketRoutes);

// Ruta de prueba (Para el navegador)
app.get('/', (req, res) => {
  res.send('🚀 API HelpDesk funcionando correctamente');
});

// CONEXIÓN A MONGODB
console.log('🔍 Intentando conectar a MongoDB...');
console.log(`📌 MONGO_URI: ${process.env.MONGO_URI}`);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB exitosamente');
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📋 Endpoints disponibles:`);
      console.log(`   GET    /tickets`);
      console.log(`   GET    /tickets/:id`);
      console.log(`   POST   /tickets`);
      console.log(`   PUT    /tickets/:id`);
      console.log(`   DELETE /tickets/:id`);
    });
  })
  .catch((error) => {
    console.error('❌ ERROR conectando a MongoDB:');
    console.log('⚠️  Iniciando servidor sin conexión a BD (modo debug)');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT} (sin BD)`);
    });
  });