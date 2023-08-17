import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from './context/ModalContext';
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/ambassador program/i);
  expect(linkElement).toBeInTheDocument();
});
