import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppUser';
import { ModuleContextProvider } from './context/ModuleContextUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModuleContextProvider>
    <App />
    </ModuleContextProvider>
  </React.StrictMode>
);

