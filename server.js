const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const ticketRoutes = require('./routes/ticketRoutes');
app.use('/api/tickets', ticketRoutes);

app.get('/api/health', (req, res) => {
    res.json({ message: 'IT SOS Backend Server is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});