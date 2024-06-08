import { BrowserRouter } from 'react-router-dom';
import { DonationRange } from './DonationRange';

export default {
  title: 'Edustipend/Sections/DonationRange',
  component: DonationRange,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
};

export const DonationRangePicker = {};
