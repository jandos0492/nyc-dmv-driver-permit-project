import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { TestProvider } from './context/TestContext';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TestProvider>
        <App />
      </TestProvider>
    </BrowserRouter>
  </React.StrictMode>
);
