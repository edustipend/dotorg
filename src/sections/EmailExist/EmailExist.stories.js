import { BrowserRouter } from 'react-router-dom';
import EmailExist from "./index"

export default {
  title: 'Edustipend/Sections/EmailExist',
  component: EmailExist,
  tags: ['autodocs']
};

export const EmailExistComponent = () => (
  <BrowserRouter>
    <EmailExist />
  </BrowserRouter>
);
