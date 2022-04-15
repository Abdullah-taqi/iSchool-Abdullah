const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(cors({ origin : 'http://localhost:4200'}))

app.listen(3000, () => console.log('Server started at port 3000'));
app.use('/employees', routes);
app.use('/about', routes);