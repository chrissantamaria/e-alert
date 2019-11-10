import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { useNotification } from './providers/NotificationProvider';

export default () => {
  const setNotification = useNotification();
  const [number, setNumber] = useState('8135455164');

  const addNumber = async () => {
    try {
      setNotification('Adding number...');
      await axios.post('/api/addNumber', { number });
      setNotification(
        'Number succesfully added, check for a confirmation text'
      );
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
      setNotification('Sending alert...');
      await axios.post('/api/alert', { message });
      setNotification('Alert successfully sent');
    } catch (e) {
      setNotification('An error occured while sending your alert');
      console.error(e);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        E-Alert
      </Typography>
      <NumberFormat
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
      <Button color="secondary" onClick={() => sendAlert('Fire alert message')}>
        Fire
      </Button>
      <Button
        color="secondary"
        onClick={() => sendAlert('Lockdown alert message')}
      >
        Lockdown
      </Button>
    </div>
  );
};
