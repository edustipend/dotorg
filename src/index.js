import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalContextProvider } from './context/ModalContext';
import { SidebarProvider } from './context/SidebarContext';
import store from './store';
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const container = document.getElementById('root');
const root = createRoot(container);

let persistor = persistStore(store)
root.render(
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
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
