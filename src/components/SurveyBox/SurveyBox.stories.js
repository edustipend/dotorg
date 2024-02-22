import SurveyBox from '.';

export default {
  title: 'Edustipend/Components/SurveyBox',
  component: SurveyBox,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'select', options: [true, false] }
  }
};

export const SurveyBoxComponent = {
  args: {
    show: true
  }
};
