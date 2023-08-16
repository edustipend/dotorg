import { fireEvent, render, screen } from '@testing-library/react';
import { Timelines } from '../Timelines';
import { HEAD_TEXT, TestId, timelineData } from '../constants';
import { BrowserRouter } from 'react-router-dom';
import Note from '../internals/Note';
import { MobileTimeline } from '../internals/MobileTimelines/MobileTimeline';

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
    it('should contain the mobile timeline component', () => {
      render(
        <BrowserRouter>
          <Timelines />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.MOBILE_ID)).toBeInTheDocument();
    });
  });

  describe('The timeline notes container of the timeline component', () => {
    it('should show the first six nodes in the notes container', () => {
      render(
        <BrowserRouter>
          <Timelines />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.NOTES_CONTAINER_ID).childNodes.length).toBe(6);
    });
    it('should should show all nodes in the notes container when the read more button is clicked', () => {
      render(
        <BrowserRouter>
          <Timelines />
        </BrowserRouter>
      );
      fireEvent.click(screen.getByTestId(TestId.READ_MORE_ID));
      expect(screen.getByTestId(TestId.NOTES_CONTAINER_ID).childNodes.length).toBe(timelineData.length);
    });
    it('should should show the initial six nodes in the notes container when the back button is clicked, it then shows a disabled back button and enabled read more button', () => {
      render(
        <BrowserRouter>
          <Timelines />
        </BrowserRouter>
      );
      fireEvent.click(screen.getByTestId(TestId.BACK_ID));
      expect(screen.getByTestId(TestId.NOTES_CONTAINER_ID).childNodes.length).toBe(6);
      expect(screen.getByTestId(TestId.BACK_ID)).toBeDisabled();
      expect(screen.getByTestId(TestId.READ_MORE_ID)).toBeEnabled();
    });
  });

  describe('The pagination event of the mobile timeline component', () => {
    it('should show a single note component in the mobile notes container', () => {
      render(
        <BrowserRouter>
          <MobileTimeline timelines={timelineData} />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.MOBILE_NOTES_CONTAINER_ID).childNodes.length).toBe(1);
    });
    it('should should show the indexing page, and the total pages', () => {
      render(
        <BrowserRouter>
          <MobileTimeline timelines={timelineData} />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.PAGES)).toContainHTML(TestId.INDEX_PAGE);
      expect(screen.getByTestId(TestId.PAGES)).toContainHTML(TestId.TOTAL_PAGES);
    });
    it('total number of pages should be equal to the timelines data length', () => {
      render(
        <BrowserRouter>
          <MobileTimeline timelines={timelineData} />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.TOTAL_PAGES).textContent).toBe(JSON.stringify(timelineData.length));
    });
  });
});
