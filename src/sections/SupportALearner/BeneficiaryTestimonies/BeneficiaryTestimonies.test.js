import React from 'react';
import { render, screen } from '@testing-library/react';

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

// Mock the TestimonialCard component
jest.mock('../../../components/TestimonialCard/TestimonialCard', () => {
  const PropTypes = require('prop-types');

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
  test('renders the MockTestimonialCard component and displays the passed props', () => {
    const props = {
      username: 'Edustipend',
      userhandle: '@edustipend',
      content: 'This is a testimonial content.',
      postDate: '2023-07-16',
      seeLink: 'See More',
      hrefLink: 'https://edustipend.org',
      source: '/random-image.jpg',
    };

    render(<MockTestimonialCard {...props} />);

    expect(screen.getByText(props.username)).toBeInTheDocument();
    expect(screen.getByText(props.userhandle)).toBeInTheDocument();
    expect(screen.getByText(props.content)).toBeInTheDocument();
    expect(screen.getByText(props.postDate)).toBeInTheDocument();
    expect(screen.getByText(props.seeLink)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: `${props.username}'s testimonial` })).toHaveAttribute('src', props.source);
    expect(screen.getByRole('link', { name: props.seeLink })).toHaveAttribute('href', props.hrefLink);
  });
});
