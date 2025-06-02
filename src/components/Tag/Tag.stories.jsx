// Tag.stories.jsx
import React from 'react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    message: { control: 'text' },
    iconSrc: { control: 'text' },
    altText: { control: 'text' },
    className: { control: 'text' }
  }
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Important update'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  message: 'Success',
  iconSrc: 'https://via.placeholder.com/20',
  altText: 'Success Icon'
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  message: 'Styled Tag',
  className: 'custom-tag-style'
};
