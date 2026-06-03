const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const taskRoutes = require('../src/routes/taskRoutes')

app.use("/tasks", taskRoutes);

module.exports = app;