import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImpactNumber from '../index';

describe('ImpactNumber component', () => {
  it('renders correctly with string amount', () => {
    render(<ImpactNumber amount="1000" label="Donations" />);

    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Donations')).toBeInTheDocument();
  });

  it('renders correctly with numeric amount', () => {
    render(<ImpactNumber amount={1000} label="Donations" />);

    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Donations')).toBeInTheDocument();
  });

  it('throws a warning if required props are missing', () => {
    const originalError = console.error;
    console.error = jest.fn();

    render(<ImpactNumber />);

    expect(console.error).toHaveBeenCalled();

    console.error = originalError;
  });
});
