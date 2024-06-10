import { BrowserRouter } from 'react-router-dom';
import Video from './index';

export default {
  title: 'Edustipend/Components/Video',
  component: Video,
  tags: ['autodocs']
};

export const VideoComponent = () => (
  <BrowserRouter>
    <Video />
  </BrowserRouter>
);
