import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CommunitiesSection from '../Communities';
import { COMMUNITIES_CONTENT, TEST_ID } from '../contants';

const renderComponent = () =>
  render(
    <BrowserRouter>
      <CommunitiesSection />
    </BrowserRouter>
  );

describe('CommunitiesSection', () => {
  it('renders the container and key elements', () => {
    renderComponent();

    expect(screen.getByTestId(TEST_ID.COMMUNITIES_CONTAINER)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.COMMUNITIES_IMAGE)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.COMMUNITIES_TITLE)).toHaveTextContent(COMMUNITIES_CONTENT.HEADER);
    expect(screen.getByTestId(TEST_ID.COMMUNITIES_SUBTITLE)).toHaveTextContent(COMMUNITIES_CONTENT.SUB_HEADER);
    expect(screen.getByTestId(TEST_ID.COMMUNITIES_SUBTEXT)).toHaveTextContent(COMMUNITIES_CONTENT.DESCRIPTION);
  });

  it('renders exactly one button with correct label', () => {
    renderComponent();

    const button = screen.getByTestId(TEST_ID.COMMUNITIES_CTA);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(COMMUNITIES_CONTENT.COMMUNITIES_BUTTON_TEXT);
  });
});
