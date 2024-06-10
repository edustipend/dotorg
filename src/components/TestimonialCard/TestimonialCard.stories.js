import React from 'react';
import TestimonialCard from './TestimonialCard';

export default {
  title: 'Components/TestimonialCard',
  component: TestimonialCard
};

const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: 'John Doe',
  userhandle: '@johndoe',
  content: 'This is a testimonial content.',
  postDate: 'June 1, 2024',
  seeLink: 'See More',
  hrefLink: 'http://example.com',
  source: 'path/to/profile-image.jpg'
};

export const WithoutOptionalProps = Template.bind({});
WithoutOptionalProps.args = {
  username: 'Jane Doe',
  userhandle: '@janedoe',
  seeLink: 'See More',
  source: 'path/to/profile-image.jpg'
};
