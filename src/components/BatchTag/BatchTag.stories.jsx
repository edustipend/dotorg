import React from 'react';
import BatchTag from './BatchTag';

export default {
  title: 'Components/BatchTag',
  component: BatchTag,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error']
    }
  }
};

const Template = (args) => <BatchTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Tag'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With Icon',
  iconSrc: sampleIcon
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info Tag',
  variant: 'info'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Tag',
  variant: 'success'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Tag',
  variant: 'warning'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Tag',
  variant: 'error'
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  label: 'Custom Styled',
  className: 'my-custom-class'
};
