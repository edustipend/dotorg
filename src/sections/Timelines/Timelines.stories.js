import { BrowserRouter } from 'react-router-dom';
import { Timelines } from './Timelines';

export default {
  title: 'Edustipend/Sections/Timelines',
  component: Timelines,
  tags: ['autodocs']
};

export const TimelinesComponent = () => (
  <BrowserRouter>
    <Timelines />
  </BrowserRouter>
);
