const express = require('express');
const path = require('path');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ۱. میدل‌ور برای پردازش داده‌های ورودی JSON
app.use(express.json());

// ۲. سرو کردن فایل‌های استاتیک (مانند index.html)
app.use(express.static(__dirname));

// ۳. روت اصلی برای نمایش صفحه وب فرانت‌اند
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ۴. روت‌های مربوط به API تیکت‌ها
app.use('/api/tickets', ticketRoutes);

// ۵. راه‌اندازی سرور
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});