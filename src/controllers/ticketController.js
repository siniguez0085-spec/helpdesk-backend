const Ticket = require('../models/Ticket');

// --- CONTROLADOR: Crear un ticket ---
exports.crearTicket = async (req, res) => {
    try {
        const nuevoTicket = new Ticket(req.body);
        await nuevoTicket.save();
        res.status(201).json({ 
            mensaje: "Ticket creado exitosamente", 
            ticket: nuevoTicket 
        });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el ticket" });
    }
};

// --- CONTROLADOR: Obtener todos los tickets ---
exports.obtenerTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los tickets" });
    }
};

// --- CONTROLADOR: Obtener un ticket por ID ---
exports.obtenerTickets = async (req, res) => {
    try {
        // Intentamos traer los tickets
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        // Esto imprimirá el error real en los logs de Render
        console.error("❌ ERROR DETALLADO EN EL BACKEND:", error.message);
        res.status(500).json({ 
            error: "Error al obtener los tickets", 
            detalle: error.message 
        });
    }
};

// --- CONTROLADOR: Actualizar un ticket ---
exports.actualizarTicket = async (req, res) => {
    try {
        const ticketActualizado = await Ticket.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Esto devuelve el ticket ya actualizado
        );
        if (!ticketActualizado) {
            return res.status(404).json({ error: "Ticket no encontrado" });
        }
        res.json({ 
            mensaje: "Ticket actualizado correctamente", 
            ticket: ticketActualizado 
        });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el ticket" });
    }
};

// --- CONTROLADOR: Eliminar un ticket ---
exports.eliminarTicket = async (req, res) => {
    try {
        const ticketEliminado = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticketEliminado) {
            return res.status(404).json({ error: "Ticket no encontrado" });
        }
        res.json({ mensaje: "Ticket eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el ticket" });
    }
};