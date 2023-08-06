import { render, screen } from '@testing-library/react';
import {Quote} from '../Quote';
import { TestId } from '../constants';

describe('Quote component', () => {
  it('shows the right quote', () => {
    const mockTextContent = "Learner's Quote";
    render(<Quote content={mockTextContent} dataTest={TestId.DEFAULT_QUOTE_TEST_ID} />);
    expect(screen.getByTestId(TestId.DEFAULT_QUOTE_TEST_ID)).toHaveTextContent(mockTextContent);
  });
});
