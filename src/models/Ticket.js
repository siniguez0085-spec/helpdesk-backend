const mongoose = require('mongoose');

// Definimos el "molde" de cómo va a ser un ticket en la base de datos
const ticketSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        enum: ['Baja', 'Media', 'Alta'],
        default: 'Media'
    },
    estado: {
        type: String,
        enum: ['Abierto', 'En progreso', 'Cerrado'],
        default: 'Abierto'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

// Exportamos el modelo para usarlo en otros archivos
module.exports = mongoose.model('Ticket', ticketSchema);