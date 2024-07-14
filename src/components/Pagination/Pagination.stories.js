import { BrowserRouter } from 'react-router-dom';
import Pagination from './index';

export default {
  title: 'Edustipend/Components/Pagination',
  component: Pagination,
  tags: ['autodocs']
};

export const PaginationComponent = () => (
  <BrowserRouter>
    <Pagination />
  </BrowserRouter>
);
