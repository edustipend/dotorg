import { render, screen } from '@testing-library/react';
import { Request } from '../Request';
import { TestId } from '../constants';

describe('RequestNow conponent', () => {
  it('The component should be rendered', () => {
    render(<Request />);
    expect(screen.getByTestId(TestId.REQUEST_SECTION)).toBeInTheDocument();
  });
});
