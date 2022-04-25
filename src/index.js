import React from 'react';
import './styles/index.css';
import App from './app/App';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import reportWebVitals from './tests/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <HelmetProvider>
            <App />
         </HelmetProvider>
      </BrowserRouter>
   </React.StrictMode>
);

reportWebVitals();
