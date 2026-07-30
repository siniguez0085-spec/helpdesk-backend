const express = require('express');
const app = express();

// Esto es OBLIGATORIO para que Postman lea tu JSON
app.use(express.json());

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