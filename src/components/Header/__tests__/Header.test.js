import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { TestId } from '../constants';

describe('Header component', () => {
  const mockHeaderText = 'Request stipend';

  it('renders the right text', () => {
    render(<Header dataTest={TestId.DEFAULT_HEADER_TEST_ID}>{mockHeaderText}</Header>);
    expect(screen.getByTestId(TestId.DEFAULT_HEADER_TEST_ID)).toHaveTextContent(mockHeaderText);
  });

  it('renders upper case text for subheader', () => {
    render(
      <Header dataTest={TestId.DEFAULT_HEADER_TEST_ID} subheader={true}>
        {mockHeaderText}
      </Header>
    );
    expect(screen.getByTestId(TestId.DEFAULT_HEADER_TEST_ID)).toHaveTextContent(mockHeaderText);
  });
});
