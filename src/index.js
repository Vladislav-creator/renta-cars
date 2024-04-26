

import React from 'react';
import { Provider } from 'react-redux'; 
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { createRoot } from 'react-dom/client';
import './i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/renta-cars">
         <App />
       </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);




