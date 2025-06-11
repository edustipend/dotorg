import React from 'react';
import { render, screen } from '@testing-library/react';
import BatchTag from '../BatchTag';

describe('BatchTag', () => {
  it('renders the label', () => {
    render(<BatchTag label="How It Works" />);
    expect(screen.getByText('How It Works')).toBeInTheDocument();
  });

  it('renders the image when iconSrc is provided', () => {
    render(<BatchTag label="Info" iconSrc="/test-icon.svg" />);
    const img = screen.getByRole('img', { hidden: true });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-icon.svg');
  });

  it('applies the correct variant class', () => {
    render(<BatchTag label="Success" variant="success" />);
    const tag = screen.getByText('Success');
    expect(tag.className).toMatch(/success/);
  });

  it('applies additional className', () => {
    render(<BatchTag label="Extra Class" className="custom-class" />);
    const tag = screen.getByText('Extra Class');
    expect(tag.className).toMatch(/custom-class/);
  });
});
