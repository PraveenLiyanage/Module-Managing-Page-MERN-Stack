import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModuleContextProvider } from './context/ModuleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModuleContextProvider>
    <App />
    </ModuleContextProvider>
  </React.StrictMode>
);

