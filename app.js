const express = require('express');
const app = express();

// Esto es OBLIGATORIO para que Postman lea tu JSON
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Esta es la ruta POST que estabas probando
app.post('/tickets', (req, res) => {
    console.log("✅ ¡Llegó un ticket!", req.body);
    res.status(201).json({ 
        mensaje: "Ticket creado exitosamente",
        datos: req.body
    });
});

// Esto es para que el navegador no te dé error
app.get('/', (req, res) => {
    res.send("Servidor funcionando");
});

// Ponemos el puerto 3000 para evitar bloqueos
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});