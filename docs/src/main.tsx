import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@pallassystems/website-core/website.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
