import { render, screen } from '@testing-library/react';
import { Timelines } from '../Timelines';
import { HEAD_TEXT, TestId } from '../constants';
import { BrowserRouter } from 'react-router-dom';
import Note from '../internals/Note';

describe('Timelines', () => {
  describe('The Timelines component should be rendered', () => {
    it('should  be in the document', () => {
      render(
        <BrowserRouter>
          <Timelines />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.TIMELINE_ID)).toBeInTheDocument();
    });
    it('should have a displayed head text', () => {
      render(
        <BrowserRouter>
          <Timelines />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.TIMELINE_ID)).toHaveTextContent(HEAD_TEXT);
    });
    it('should contain the note component', () => {
      render(
        <BrowserRouter>
          <Note />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.NOTE_ID)).toBeInTheDocument();
    });
  });
});
