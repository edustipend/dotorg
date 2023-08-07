import HorizontalStepperComponent from '../HorizontalStepper';
import { stepsData } from '../../constants';

export default {
  title: 'Edustipend/Components/HorizontalStepper',
  component: HorizontalStepperComponent,
  tags: ['autodocs']
};

export const DefaultText = {
  args: {
    stepsData: stepsData,
    activeStep: 1
  }
};
