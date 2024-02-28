import { render, screen } from '@testing-library/react';
import { HowWeSelect } from '../HowWeSelect';
import { BrowserRouter } from 'react-router-dom';
import { TestId, headText } from '../constants';

describe('HowWeSelect component', () => {
  describe('renders the correct HowWeSelect component', () => {
    it('shows the HowWeSelect component in the document', () => {
      render(
        <BrowserRouter>
          <HowWeSelect />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows How we select beneficiaries  header text', () => {
      render(
        <BrowserRouter>
          <HowWeSelect />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });

    it('has the content container that wraps the how we select steps', () => {
      render(
        <BrowserRouter>
          <HowWeSelect />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.CONTENTS_CONTAINER)).toBeInTheDocument();
    });

    it('has a cta button', () => {
      render(
        <BrowserRouter>
          <HowWeSelect />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SUPPORT_CTA)).toBeInTheDocument();
    });
  });
});
