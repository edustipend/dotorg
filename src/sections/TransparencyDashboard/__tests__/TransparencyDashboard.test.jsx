import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestId } from '../constants';
import { TransparencyDashboard } from '../TransparencyDashboard';

describe('Transparency Dashoard component', () => {
  describe('renders the correct Transparency Dashoard component', () => {
    it('shows the Transparency Dashoard component in the document', () => {
      render(
        <BrowserRouter>
          <TransparencyDashboard />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.TRANSPARENCY_DASHBOARD_ID)).toBeInTheDocument();
    });
    it('shows the filter component in the document', () => {
      render(
        <BrowserRouter>
          <TransparencyDashboard />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DONATIONS_FILTER_ID)).toBeInTheDocument();
    });
    it('shows the goals component in the document', () => {
      render(
        <BrowserRouter>
          <TransparencyDashboard />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.GOALS_ID)).toBeInTheDocument();
    });
    it('shows the table component in the document', () => {
      render(
        <BrowserRouter>
          <TransparencyDashboard />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.TABLE_ID)).toBeInTheDocument();
    });
  });
});
