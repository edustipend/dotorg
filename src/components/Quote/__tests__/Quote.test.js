import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
=======
import {Quote} from '../Quote';
>>>>>>> 43c525ea8c7e68e10f5b276f65464ff43f6baa4f
import { TestId } from '../constants';
import { Quote } from '../Quote';

describe('Quote component', () => {
  it('shows the right quote', () => {
    const mockTextContent = "Learner's Quote";
    render(<Quote content={mockTextContent} dataTest={TestId.DEFAULT_QUOTE_TEST_ID} />);
    expect(screen.getByTestId(TestId.DEFAULT_QUOTE_TEST_ID)).toHaveTextContent(mockTextContent);
  });
});
