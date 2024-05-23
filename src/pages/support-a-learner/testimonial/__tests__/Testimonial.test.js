import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonial from '../Testimonial';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

jest.mock('../../../../components/Container/ContainerComponent', () => ({
  // eslint-disable-next-line react/prop-types
  Container: ({ children }) => <div data-testid="container">{children}</div>
}));

describe('Testimonial Component', () => {
  test('renders testimonial header', () => {
    render(<Testimonial />);
    const headerElement = screen.getByText(/testimonials/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders testimonial description', () => {
    render(<Testimonial />);
    const descriptionElement = screen.getByText(/Discover what the community has to say/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders all testimonials', () => {
    render(<Testimonial />);
    const testimonialElements = screen.getAllByTestId('testimonial-card');
    expect(testimonialElements.length).toBeGreaterThan(0);
  });
});
