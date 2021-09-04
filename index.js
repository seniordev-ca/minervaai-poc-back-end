const path = require('path');
const express = require('express');
const cors = require('cors')({origin: true});
const router = require('./route');
require('dotenv').config();

const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(cors);

app.use("/get_search_results", router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // next();
});

// start express server on port 5000
app.listen(5000, () => {
  console.log('server started on port 5000');
});
