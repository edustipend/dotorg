import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from '../Tag';

describe('MilestoneTag', () => {
  const message = 'You did it! You’ve completed the program.';
  const iconSrc = 'test-icon.svg';
  const altText = 'Achievement Icon';

  it('renders the message correctly', () => {
    render(<Tag message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('renders the icon when iconSrc is provided', () => {
    render(<Tag message={message} iconSrc={iconSrc} altText={altText} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', iconSrc);
    expect(img).toHaveAttribute('alt', altText);
  });

  it('does not render an img when iconSrc is not provided', () => {
    render(<Tag message={message} />);
    const img = screen.queryByRole('img');
    expect(img).not.toBeInTheDocument();
  });

  it('applies additional className when provided', () => {
    render(<Tag message={message} className="custom-class" />);
    const container = screen.getByText(message).parentElement;
    expect(container.className).toMatch(/custom-class/);
  });
});
