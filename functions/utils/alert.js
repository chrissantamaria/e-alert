const admin = require('firebase-admin');
const db = admin.firestore();

const sendMessage = require('./sendMessage');

module.exports = async (req, res) => {
  try {
    const { message } = req.body;
    const snapshot = await db.collection('numbers').get();
    const numbers = snapshot.docs.map(doc => doc.id);

    const errors = [];
    const sids = await Promise.all(
      numbers.map(number =>
        sendMessage({
          message,
          number
        }).catch(error => {
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
