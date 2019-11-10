const functions = require('firebase-functions');
const admin = require('firebase-admin');
const db = admin.firestore();

// Getting Twilio credentials
const { twilio } = functions.config();
const client = require('twilio')(twilio.sid, twilio.token);

module.exports = async (req, res) => {
  try {
    const { message } = req.body;
    const snapshot = await db.collection('numbers').get();
    const numbers = snapshot.docs.map(doc => doc.id);

    const errors = [];
    const sids = await Promise.all(
      numbers.map(number =>
        client.messages
          .create({
            body: message,
            from: twilio.number,
            to: number
          })
          .catch(error => {
            errors.push({ number, error });
          })
      )
    );

    res.json({ errors, sids });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};
