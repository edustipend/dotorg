import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Request } from '../Request';
import { TestId } from '../constants';
import { ModalContextProvider } from '../../../context/ModalContext';

describe('RequestNow conponent', () => {
  it('The component should be rendered', () => {
    render(
      <ModalContextProvider>
        <BrowserRouter>
          <Request />
        </BrowserRouter>
      </ModalContextProvider>
    );
    expect(screen.getByTestId(TestId.REQUEST_SECTION)).toBeInTheDocument();
  });
});
