const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3001 } = process.env;

const app = express();

app.listen(PORT, () => {
    console.log(`This server is running on port ${PORT}`)
  });