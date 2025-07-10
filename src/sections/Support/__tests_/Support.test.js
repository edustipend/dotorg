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
    expect(screen.getByTestId(TEST_ID.SUPPORT_TITLE)).toHaveTextContent(SUPPORT_CONTENT.HEADER);
    expect(screen.getByTestId(TEST_ID.SUPPORT_SUBTITLE)).toHaveTextContent(SUPPORT_CONTENT.SUB_HEADER);
    expect(screen.getByTestId(TEST_ID.SUPPORT_SUBTEXT)).toHaveTextContent(SUPPORT_CONTENT.DESCRIPTION);
  });

  it('renders exactly one button with correct label', () => {
    renderComponent();

    const button = screen.getByTestId(TEST_ID.SUPPORT_CTA);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(SUPPORT_CONTENT.SUPPORT_BUTTON_TEXT);
  });
});
