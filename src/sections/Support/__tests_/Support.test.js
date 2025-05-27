import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SupportALearnerSection from '../Support';
import { SUPPORT_CONTENT, TEST_ID } from '../contants';

const renderComponent = () =>
  render(
    <BrowserRouter>
      <SupportALearnerSection />
    </BrowserRouter>
  );

describe('SupportALearnerSection', () => {
  it('renders the container and key elements', () => {
    renderComponent();

    expect(screen.getByTestId(TEST_ID.SUPPORT_CONTAINER)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.SUPPORT_IMAGE)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.SUPPORT_TITLE)).toHaveTextContent(SUPPORT_CONTENT.HEADER)
    expect(screen.getByTestId(TEST_ID.SUPPORT_SUBTEXT)).toHaveTextContent(SUPPORT_CONTENT.DESCRIPTION);
  });

  it('displays correct button labels', () => {
    renderComponent();

    const supportButtons = screen.getAllByTestId(TEST_ID.SUPPORT_CTA);
    const impactButtons = screen.getAllByTestId(TEST_ID.IMPACT_CTA);

    expect(supportButtons.length).toBe(2); // one for desktop, one for mobile
    expect(impactButtons.length).toBe(2);

    supportButtons.forEach((button) => {
      expect(button).toHaveTextContent(SUPPORT_CONTENT.SUPPORT_BUTTON_TEXT);
    });

    impactButtons.forEach((button) => {
      expect(button).toHaveTextContent(SUPPORT_CONTENT.IMPACT_BUTTON_TEXT);
    });
  });
});
