import { render, screen } from '@testing-library/react';
import { Banner } from '../Banner';
import { TestId } from '../constants';

describe('Banner component', () => {
  const mockBannerText = 'Request stipend';

  it('renders the right text', () => {
    render(<Banner dataTest={TestId.DEFAULT_BANNER_TEST_ID}>{mockBannerText}</Banner>);
    expect(screen.getByTestId(TestId.DEFAULT_BANNER_TEST_ID)).toHaveTextContent(mockBannerText);
  });
});
