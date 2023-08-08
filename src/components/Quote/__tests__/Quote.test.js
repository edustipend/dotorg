import { render, screen } from '@testing-library/react';
import { TestId } from '../constants';
import { Quote } from '../Quote';

describe('Quote component', () => {
  it('shows the right quote', () => {
    const mockTextContent = "Learner's Quote";
    render(<Quote content={mockTextContent} dataTest={TestId.DEFAULT_QUOTE_TEST_ID} />);
    expect(screen.getByTestId(TestId.DEFAULT_QUOTE_TEST_ID)).toHaveTextContent(mockTextContent);
  });
});
