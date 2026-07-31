const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticketController.js');
router.post('/', ticketController.crearTicket);
router.get('/', ticketController.obtenerTickets);
router.get('/:id', ticketController.obtenerTicketPorId);
router.put('/:id', ticketController.actualizarTicket);
router.delete('/:id', ticketController.eliminarTicket);

module.exports = router;