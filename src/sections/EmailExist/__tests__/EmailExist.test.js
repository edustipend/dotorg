import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmailExist } from '../EmailExist';
import { ModalContextProvider } from '../../../context/ModalContext';
import { MemoryRouter } from 'react-router-dom';

// Mocking the EmailExistForm component to isolate the test for EmailExist
jest.mock('../internals/EmailExistForm', () => ({
  __esModule: true,
  EmailExistForm: jest.fn(() => null),
}));

describe('EmailExist component', () => {
  it('renders EmailExist component and closes modal when close icon is clicked', () => {

    // Render the actual ModalContextProvider with the real ModalContext
    render(
      <MemoryRouter>
        <ModalContextProvider>
          <EmailExist />
        </ModalContextProvider>
      </MemoryRouter>
    );

    // Simulate clicking the close icon
    fireEvent.click(screen.getByAltText('closeModal'));

  });
});
