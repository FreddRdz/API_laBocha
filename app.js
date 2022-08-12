const express = require('express');
const colors = require('colors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());

// Connection to db
const connectToDb = require('./src/config/db');
connectToDb();

// Player routes
const routerPlayers = require('./src/routes/players');
app.use('/api/v1/players', routerPlayers);

// Environment variables
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`.bold);
});
