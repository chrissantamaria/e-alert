import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button } from '@material-ui/core';
import { useNotification } from '../../providers/NotificationProvider';

const FIRE_MESSAGE = 'Fire alarm activated. Evacuate the building immediately.';
const LOCKDOWN_MESSAGE =
  'Lockdown initiated. Find shelter immediately. Do not open doors for anyone until further notice. Ignore all fire alarms.';

export default () => {
  const setNotification = useNotification();
  const [alertMessage, setAlertMessage] = useState('');

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
