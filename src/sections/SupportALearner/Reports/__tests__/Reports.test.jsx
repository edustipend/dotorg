import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestId, Texts } from '../constants';
import Reports from '../Reports';

describe('Reports component', () => {
  describe('renders the correct Reports component', () => {
    it('shows the Reports component in the document', () => {
      render(<Reports />);

      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows Reports header text', () => {
      render(<Reports />);

      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(Texts.HEADER);
    });

    it('shows Reports sub-header text', () => {
      render(<Reports />);

      expect(screen.getByTestId(TestId.SUB_HEADER)).toHaveTextContent(Texts.SUB_HEADER);
    });

    it('renders the PDF container', () => {
      render(<Reports />);

      expect(screen.getByTestId(TestId.PDF_CONTAINER)).toBeInTheDocument();
    });
  });

  describe('handles PDF loading states', () => {
    it('shows loading state when PDF URL is not available', () => {
      jest.spyOn(React, 'useState').mockImplementationOnce(() => ['', jest.fn()]);

      render(<Reports />);

      expect(screen.queryByTestId(TestId.PDF_FRAME)).not.toBeInTheDocument();
      expect(screen.getByText(TestId.LOADING)).toBeInTheDocument();
    });
  });
});
