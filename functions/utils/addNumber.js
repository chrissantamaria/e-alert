const admin = require('firebase-admin');
const db = admin.firestore();
const phone = require('phone');

const sendMessage = require('./sendMessage');

const CONFIRMATION_MESSAGE =
  'Your number has been successfully registered with E-Alert. Visit the platform at https://e-alert-3b6bd.firebaseapp.com/';

module.exports = async (req, res) => {
  try {
    let { number } = req.body;
    const numberValidation = phone(req.body.number);

    if (!numberValidation.length) {
      res.status(400).send({
        error: {
          message: `Number ${number} is not valid`
        }
      });
      return;
    } else if (numberValidation[1] !== 'USA') {
      res.status(400).send({
        error: {
          message: `Number ${number} is not a USA number`
        }
      });
      return;
    }
    number = numberValidation[0];

    const ref = db.collection('numbers').doc(number);
    const doc = await ref.get();

    if (doc.exists) {
      res.status(400).send({
        error: {
          message: `Number ${number} has already been registered`
        }
      });
      return;
    }

    await ref.set({});

    await sendMessage({
      number,
      message: CONFIRMATION_MESSAGE
    });

    res.send();
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};
