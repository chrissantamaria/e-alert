import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { useNotification } from '../../providers/NotificationProvider';

export default () => {
  const setNotification = useNotification();
  const [number, setNumber] = useState('');

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
    </>
  );
};
