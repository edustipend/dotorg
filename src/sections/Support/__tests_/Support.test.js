import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SupportALearnerSection from '../Support';

const renderComponent = () =>
  render(
    <BrowserRouter>
      <SupportALearnerSection />
    </BrowserRouter>
  );

describe('SupportALearnerSection', () => {
  it('renders the container and key elements', () => {
    renderComponent();

    expect(screen.getByTestId('support-container')).toBeInTheDocument();
    expect(screen.getByTestId('support-image')).toBeInTheDocument();
    expect(screen.getByTestId('support-title')).toBeInTheDocument();
    expect(screen.getByTestId('support-subtext')).toBeInTheDocument();
  });

  it('displays correct button labels', () => {
    renderComponent();

    const supportButtons = screen.getAllByTestId('support-cta');
    const impactButtons = screen.getAllByTestId('impact-cta');

    expect(supportButtons.length).toBe(2); // one for desktop, one for mobile
    expect(impactButtons.length).toBe(2);

    supportButtons.forEach((button) => {
      expect(button).toHaveTextContent('I want to support a learner');
    });

    impactButtons.forEach((button) => {
      expect(button).toHaveTextContent('View our impact stories');
    });
  });
});
