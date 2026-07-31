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
exports.obtenerTicketPorId = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).json({ error: "Ticket no encontrado" });
        }
        res.json(ticket);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el ticket" });
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