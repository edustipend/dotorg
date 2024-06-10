import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

test('renders TestimonialCard with all props', () => {
  const props = {
    username: 'John Doe',
    userhandle: '@johndoe',
    content: 'This is a testimonial content.',
    postDate: 'June 1, 2024',
    seeLink: 'See More',
    hrefLink: 'http://example.com',
    source: 'path/to/profile-image.jpg'
  };

  render(<TestimonialCard {...props} />);

  // Check if all elements are rendered with the correct content
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('@johndoe')).toBeInTheDocument();
  expect(screen.getByText('This is a testimonial content.')).toBeInTheDocument();
  expect(screen.getByText('June 1, 2024')).toBeInTheDocument();
  expect(screen.getByText('See More')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /see more/i })).toHaveAttribute('href', 'http://example.com');
  expect(screen.getByAltText('John Doe')).toHaveAttribute('src', 'path/to/profile-image.jpg');
  expect(screen.getByText('Beneficiary')).toBeInTheDocument();
});

test('renders TestimonialCard without optional props', () => {
  const props = {
    username: 'Jane Doe',
    userhandle: '@janedoe',
    seeLink: 'See More',
    source: 'path/to/profile-image.jpg'
  };

  render(<TestimonialCard {...props} />);

  // Check if required elements are rendered with the correct content
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  expect(screen.getByText('@janedoe')).toBeInTheDocument();
  expect(screen.getByText('See More')).toBeInTheDocument();
  expect(screen.getByAltText('Jane Doe')).toHaveAttribute('src', 'path/to/profile-image.jpg');
  expect(screen.getByText('Beneficiary')).toBeInTheDocument();
});
