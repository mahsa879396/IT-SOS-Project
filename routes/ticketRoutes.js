const express = require('express');
const router = express.Router();
const { getAllTickets, createTicket } = require('../controllers/ticketController');

router.get('/', getAllTickets);
router.post('/', createTicket);

module.exports = router;