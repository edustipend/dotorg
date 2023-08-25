import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalContextProvider } from './context/ModalContext';
<<<<<<< HEAD
import { SidebarProvider } from './context/SidebarContext';
=======
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
import store from './store';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ModalContextProvider>
<<<<<<< HEAD
          <SidebarProvider>
            <App />
          </SidebarProvider>
=======
          <App />
>>>>>>> 52ea5651a6558dda3e0f30d2224bde31d8b5b03b
        </ModalContextProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
