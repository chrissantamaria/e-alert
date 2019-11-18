const functions = require('firebase-functions');

// Getting Twilio credentials
const { twilio } = functions.config();
const client = require('twilio')(twilio.sid, twilio.token);

module.exports = ({ message, number }) =>
  client.messages.create({
    body: message,
    from: twilio.number,
    to: number
  });
