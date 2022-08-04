const express = require('express');

const app = express();

// Middlewares
app.use(express.json());

const router = require('./src/routes/players');

app.use('/api/v1/players', router);

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
