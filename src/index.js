import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import DataProvider from './providers/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>
);

