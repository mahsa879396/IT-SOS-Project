const tickets = require('../models/ticketModel');

// دریافت لیست تمام تیکت‌ها
const getAllTickets = (req, res) => {
    res.json(tickets);
};

// ثبت تیکت جدید
const createTicket = (req, res) => {
    const { title, description, priority } = req.body;
    
    const newTicket = {
        id: tickets.length + 1,
        title,
        description,
        priority: priority || 'Low',
        status: 'Open',
        createdAt: new Date()
    };

    tickets.push(newTicket);
    res.status(201).json(newTicket);
};

module.exports = { getAllTickets, createTicket };