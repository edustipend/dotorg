import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Supports from '../Supports';
import { AMT_RAISED_TEXT, TestId, content1, content2, content3, content4, headText, progressText1, progressText2, subHeadText } from '../constants';

describe('Supports component', () => {
  describe('renders the correct Supports component', () => {
    it('shows the Supports component in the document', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows Supports header text', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });

    it('shows Supports sub header text', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SUB_HEAD_TEXT)).toHaveTextContent(subHeadText);
    });

    it('shows Supports content 1', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.CONTENT1)).toHaveTextContent(content1);
    });

    it('shows Supports content 2', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.CONTENT2)).toHaveTextContent(content2);
    });

    it('shows Supports content 3', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.CONTENT3)).toHaveTextContent(content3);
    });

    it('shows Supports content 4', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.CONTENT4)).toHaveTextContent(content4);
    });

    it('shows Supports progress Text 1', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.progressText1)).toHaveTextContent(progressText1);
    });

    it('shows Supports progress Text 2', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.progressText2)).toHaveTextContent(progressText2);
    });

    it('shows the progress bar container in the document', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.PROGRESS_BAR_CONTAINER)).toBeInTheDocument();
    });

    it('shows the progress bar amount label in the document', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.PROGRESS_BAR_AMOUNT_LABEL)).toBeInTheDocument();
    });

    it('shows the amount raised', async () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.AMT_RAISED)).toBeInTheDocument();
    });

    it('shows the amount raised text', () => {
      render(
        <BrowserRouter>
          <Supports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.AMT_RAISED_TEXT)).toHaveTextContent(AMT_RAISED_TEXT);
    });
  });
});
