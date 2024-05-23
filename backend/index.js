const express = require("express");
const connectDB = require("./utils/db.js");
//const cors = require('cors');
const app = express();

// Connect Database
connectDB();

// Middleware
//app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
//app.use('/api/auth', require('./routes/auth'));
//app.use('/api/events', require('./routes/events'));
//app.use('/api/projects', require('./routes/projects'));
//app.use('/api/chat', require('./routes/chat'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
