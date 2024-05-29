import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from '../AboutUs';
import { TestId, headText, desc, missionAndVisionData, MISSION, VISION } from '../constant';

describe('AboutUs component', () => {
  describe('renders the correct AboutUs component', () => {
    it('shows the AboutUs component in the document', () => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
    });

    it('shows AboutUs header text', () => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(headText);
    });

    it('shows AboutUs description text', () => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DESC)).toHaveTextContent(desc);
    });

    it('shows an image in the document', () => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.IMAGE)).toBeInTheDocument();
    });

    it('renders mission and vision data correctly', () => {
      render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>
      );

      expect(screen.getByText(MISSION)).toBeInTheDocument();
      expect(screen.getByText(missionAndVisionData[0].description)).toBeInTheDocument();
      expect(screen.getByText(VISION)).toBeInTheDocument();
      expect(screen.getByText(missionAndVisionData[1].description)).toBeInTheDocument();
    });
  });
});
