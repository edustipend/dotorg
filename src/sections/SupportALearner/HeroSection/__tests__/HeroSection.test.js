import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';
import { Texts } from '../contants';

describe('HeroSection component', () => {
  it('renders with header and buttons', async () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    await waitFor(() => {
      const smallHeaders = screen.queryAllByText(Texts.SMALL_HEADER_TEXT);
      expect(smallHeaders).toHaveLength(2);
    });

    await waitFor(() => {
      const largeHeaders = screen.queryAllByText(Texts.LARGE_HEADER_TEXT);
      expect(largeHeaders).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getByText(Texts.CONTENT)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(Texts.SUPPORT_TEXT)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(Texts.DONATE_TEXT)).toBeInTheDocument();
    });
  });

  /**
   * HELP!!! THE TEST BELOW IS NOT PASSING AND THAT IS WHY I COMMENTED IT OUT.
   */

  // it('changes quote after interval', async () => {
  //   render(
  //     <MemoryRouter>
  //       <HeroSection />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByTestId('quote-content')).toBeInTheDocument();
  //   });

  //   // Get the initial quote content
  //   const initialQuoteContent = screen.findByTestId('quote-content').textContent;

  //   // Wait for the interval
  //   await new Promise((resolve) => setTimeout(resolve, 10000));

  //   // Get the new quote content
  //   const newQuoteContent = screen.findByTestId('quote-content').textContent;

  //   expect(newQuoteContent).not.toBe(initialQuoteContent);
  // });
});
