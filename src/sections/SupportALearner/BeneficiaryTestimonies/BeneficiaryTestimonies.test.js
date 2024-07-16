// BeneficiaryTestimonies.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import BeneficiaryTestimonies from './BeneficiaryTestimonies';
import '@testing-library/jest-dom/extend-expect';

// Mock the Slider component from 'react-slick'
jest.mock('react-slick', () => {
  const PropTypes = require('prop-types');
  const MockSlider = ({ children }) => <div>{children}</div>;
  MockSlider.displayName = 'Slider';

  // Define prop types for the mock component
  MockSlider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return MockSlider;
});

// Mock the TestimonialCard component
jest.mock('../../../components/TestimonialCard/TestimonialCard', () => {
  const PropTypes = require('prop-types');
  const MockTestimonialCard = ({ username, userhandle, content, postDate, seeLink, hrefLink, source }) => (
    <div data-testid="testimonial-card">
      <img src={source} alt={`${username}'s testimonial`} />
      <p>{username}</p>
      <p>{userhandle}</p>
      <p>{content}</p>
      <p>{postDate}</p>
      <a href={hrefLink}>{seeLink}</a>
    </div>
  );

  MockTestimonialCard.displayName = 'TestimonialCard';

  // Define prop types for the mock component
  MockTestimonialCard.propTypes = {
    username: PropTypes.string.isRequired,
    userhandle: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    seeLink: PropTypes.string.isRequired,
    hrefLink: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };

  return MockTestimonialCard;
});

describe('BeneficiaryTestimonies Component', () => {
  test('renders the component and displays the testimonials', () => {
    render(<BeneficiaryTestimonies />); // Ensure the component renders correctly

    // Check for the header
    const header = screen.getByText('Testimonials');
    expect(header).toBeInTheDocument();

    // Check for the description
    const description = screen.getByText(/Discover what the community has to say about the transformative power of Edustipend/i);
    expect(description).toBeInTheDocument();

    // Check for the support link
    const supportLink = screen.getByText('Support a learner');
    expect(supportLink).toBeInTheDocument();
    expect(supportLink).toHaveAttribute('href', '/support-a-learner/donate');

    // Check for the testimonial cards
    const testimonialCards = screen.getAllByTestId('testimonial-card');
    expect(testimonialCards).toHaveLength(4); // Adjust the length based on your unique testimonials

    // Check the content of a specific testimonial card
    expect(screen.getByText('@NonsoBoy70')).toBeInTheDocument();
    expect(screen.getByText(/Thank you so much for this opportunity/i)).toBeInTheDocument();
  });
});
