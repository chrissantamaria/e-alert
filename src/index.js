import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotificationProvider from './providers/NotificationProvider';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
