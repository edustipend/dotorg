import React from 'react';
import App from './App';
import './index.css';
import store from './store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import { ModalContextProvider } from './context/ModalContext';
import { SidebarProvider } from './context/SidebarContext';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ScrollToTop from './ScrollToTop';
const container = document.getElementById('root');

const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ModalContextProvider>
          <SidebarProvider>
            <PersistGate persistor={persistor}>
              <ScrollToTop />
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
registerServiceWorker();
reportWebVitals();
