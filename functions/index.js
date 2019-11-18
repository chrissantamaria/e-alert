const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const app = express();

const addNumber = require('./utils/addNumber');
const alert = require('./utils/alert');

app.get('/api/ping', async (req, res) => {
  res.send('pong');
});

app.post('/api/addNumber', addNumber);
app.post('/api/alert', alert);

exports.api = functions.https.onRequest(app);
