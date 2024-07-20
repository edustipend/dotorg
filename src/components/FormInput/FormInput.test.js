import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput', () => {
  test('renders FormInput correctly with given props', () => {
    const label = 'Name';
    const placeholder = 'Enter your name';
    const type = 'text';

    render(<FormInput label={label} placeholder={placeholder} type={type} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', type);
  });

  test('renders FormInput correctly with different props', () => {
    const label = 'Email';
    const placeholder = 'Enter your email';
    const type = 'email';

    render(<FormInput label={label} placeholder={placeholder} type={type} />);

    expect(screen.getByText(label)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute('type', type);
  });
});
