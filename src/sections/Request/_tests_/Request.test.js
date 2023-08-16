import { render, screen } from '@testing-library/react';
import { Request } from '../Request';
import { TestId } from '../constants';
import { ModalContextProvider } from '../../../context/ModalContext';

describe('RequestNow conponent', () => {
  it('The component should be rendered', () => {
    render(
      <ModalContextProvider>
        <Request />
      </ModalContextProvider>
    );
    expect(screen.getByTestId(TestId.REQUEST_SECTION)).toBeInTheDocument();
  });
});
