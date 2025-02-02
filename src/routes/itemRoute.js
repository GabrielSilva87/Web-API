const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use('/items', itemRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});