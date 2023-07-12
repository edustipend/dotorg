import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { TestId } from '../constants';

describe('Header component', () => {
  const mockHeaderText = 'Request stipend';

  it('renders the right text', () => {
    render(<Header text={mockHeaderText} dataTest={TestId.DEFAULT_HEADER_TEST_ID} />);
    expect(screen.getByTestId(TestId.DEFAULT_HEADER_TEST_ID)).toHaveTextContent(mockHeaderText);
  });

  it('renders upper case text for subheader', () => {
    render(<Header dataTest={TestId.DEFAULT_HEADER_TEST_ID} text={mockHeaderText} subheader={true} />);
    expect(screen.getByTestId(TestId.DEFAULT_HEADER_TEST_ID)).toHaveTextContent(mockHeaderText);
  });
});
