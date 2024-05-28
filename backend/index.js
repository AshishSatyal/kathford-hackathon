const express = require("express");
const connectDB = require("./utils/db.js");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors package
const teamroutes = require("./routers/team.router.js");
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", teamroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
