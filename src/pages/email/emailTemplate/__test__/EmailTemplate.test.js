import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import EmailTemplate from '../EmailTemplate';

test('renders email template with correct text', () => {
  render(<EmailTemplate />);

  expect(screen.getByText(/Hello Designer Chi/i)).toBeInTheDocument();
  expect(screen.getByText(/You are almost there/i)).toBeInTheDocument();
  expect(screen.getByText(/We are here to support you in your learning goals/i)).toBeInTheDocument();
  expect(screen.getByText(/Please click the button below to verify your email address/i)).toBeInTheDocument();
  expect(screen.getByText(/Supporting you to fulfill your learning goals/i)).toBeInTheDocument();
  expect(screen.getByText(/The Edustipend Team/i)).toBeInTheDocument();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('EmailTemplate', () => {
  test('clicking the button triggers navigation if the email is valid', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <BrowserRouter>
        <EmailTemplate />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /Verify My Email/i });
    userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/demo-create/verified');
  });
});
