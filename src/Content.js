import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { useNotification } from './providers/NotificationProvider';

const FIRE_MESSAGE = 'Fire alarm activated. Evacuate the building immediately.';
const LOCKDOWN_MESSAGE =
  'Lockdown initiated. Find shelter immediately. Do not open doors for anyone until further notice. Ignore all fire alarms.';

export default () => {
  const setNotification = useNotification();
  const [number, setNumber] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const addNumber = async () => {
    try {
      if (!number) {
        setNotification('Please type a number to add');
        return;
      }

      setNotification('Adding number...');
      await axios.post('/api/addNumber', { number });
      setNotification('Number succesfully added');
    } catch (e) {
      setNotification('An error occured while adding your number');

      const { status, data } = e.response;
      // Not an error, user-friendly message
      if (status === 400) {
        setNotification(data.error.message);
      } else {
        console.log(data.error.message || data);
      }
    }
  };

  const sendAlert = async message => {
    try {
      if (!message) {
        setNotification('Please type a message for your alert');
        return;
      }

      setNotification('Sending alert...');
      await axios.post('/api/alert', { message: `TEST ALERT: ${message}` });
      setNotification('Alert successfully sent');
    } catch (e) {
      setNotification('An error occured while sending your alert');
      console.error(e);
    }
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter your number below to register for alerts.
      </Typography>
      <br />
      <NumberFormat
        style={{ marginBottom: '1rem' }}
        value={number}
        onChange={e => setNumber(e.target.value)}
        format="(###) ###-####"
        mask="_"
        customInput={TextField}
        variant="outlined"
      />
      <Button color="primary" variant="contained" onClick={addNumber}>
        Add Number
      </Button>
      <br />
      <br />
      <Typography variant="h3" gutterBottom>
        Alert
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use the buttons below to send a pre-made alert message. Alternatively,
        you can type a custom message in the field below.
      </Typography>
      <br />
      <div style={{ display: 'flex' }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => sendAlert(FIRE_MESSAGE)}
          style={{ margin: '0 0.5rem' }}
        >
          Fire
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => sendAlert(LOCKDOWN_MESSAGE)}
          style={{ margin: '0 0.5rem' }}
        >
          Lockdown
        </Button>
      </div>
      <br />
      <TextField
        style={{ marginBottom: '1rem' }}
        value={alertMessage}
        onChange={e => setAlertMessage(e.target.value)}
        variant="outlined"
        placeholder="Custom alert message"
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          sendAlert(alertMessage);
          setAlertMessage('');
        }}
      >
        Send Alert
      </Button>
    </>
  );
};
