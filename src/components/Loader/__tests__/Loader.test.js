import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';
import { TestId } from '../constants';

describe('Loader component', () => {
  it('The loader should be rendered when needed', () => {
    render(<Loader />);
    const action = screen.getByTestId(TestId.LOADER_ID);
    expect(action).toBeInTheDocument();
  });

  it('The loader should have a default size of medium', () => {
    const mockSize = 'medium';
    render(<Loader size={mockSize} />);
    const action = screen.getByTestId(TestId.LOADER_ID);
    expect(action).toBeTruthy();
  });
});
