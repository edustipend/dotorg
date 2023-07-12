import { render, screen } from '@testing-library/react';
import { Text } from '../Text';
import { TestId } from '../constants';

describe('Text component', () => {
  it('shows the right text', () => {
    const mockTextContent = 'Request stipend';
    render(<Text content={mockTextContent} dataTest={TestId.DEFAULT_TEXT_TEST_ID} />);
    expect(screen.getByTestId(TestId.DEFAULT_TEXT_TEST_ID)).toHaveTextContent(mockTextContent);
  });
});
