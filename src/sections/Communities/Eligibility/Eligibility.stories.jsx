import React from 'react';
import Eligibility from './Eligibility';

export default {
  title: 'Pages/Eligibility',
  component: Eligibility,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <Eligibility {...args} />;

export const Default = Template.bind({});
Default.args = {};
