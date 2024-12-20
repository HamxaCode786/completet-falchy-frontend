import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TransferProvider } from "./contextapi/transferservicecontext";
import './i18n';
import TranslationProvider from './contextapi/translationContext';
import SelectedCardProvider from '../src/contextapi/rentluxurycontext'; // Import the context provide

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TranslationProvider>
    <SelectedCardProvider>
  <TransferProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </TransferProvider>
    </SelectedCardProvider>
    </TranslationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
