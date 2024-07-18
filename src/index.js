import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import { ModalContextProvider } from './context/ModalContext';
import { SidebarProvider } from './context/SidebarContext';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const container = document.getElementById('root');
const root = createRoot(container);
const helmetContext = {};

let persistor = persistStore(store);
root.render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <ModalContextProvider>
            <SidebarProvider>
              <PersistGate persistor={persistor}>
                <App />
              </PersistGate>
            </SidebarProvider>
          </ModalContextProvider>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
reportWebVitals();
