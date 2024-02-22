import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from './context/ModalContext';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ambassador program/i);
  expect(linkElement).toBeInTheDocument();
});
