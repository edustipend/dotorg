import React from 'react';
import ImportantInformation from './ImportantInformation';

export default {
  title: 'Pages/ImportantInformation',
  component: ImportantInformation,
  parameters: {
    layout: 'centered'
  }
};

const Template = (args) => <ImportantInformation {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'This component displays Terms and Conditions for communities before they apply for community programs.'
    }
  }
};
