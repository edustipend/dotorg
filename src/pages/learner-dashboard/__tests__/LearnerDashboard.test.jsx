import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { LearnerDashboard } from '../LearnerDashboard';
import { ModalContextProvider } from '../../../context/ModalContext';
import { SidebarProvider } from '../../../context/SidebarContext';
import { TestId as dashboardTestId } from '../constants';
import { TestId as sidebarTestId } from '../../../components/SideBar/constants';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

const { LEARNER_DASHBOARD_WRAPPER } = dashboardTestId;
const { SIDE_BAR } = sidebarTestId;

describe('Learner dashboard', () => {
  describe('renders the Learner dashboard page', () => {
    it('is visible in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <SidebarProvider>
                <LearnerDashboard />
              </SidebarProvider>
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(LEARNER_DASHBOARD_WRAPPER)).toBeInTheDocument();
    });

    it('has a sidebar component present', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <SidebarProvider>
                <LearnerDashboard />
              </SidebarProvider>
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(LEARNER_DASHBOARD_WRAPPER)).toContainHTML(SIDE_BAR);
    });
  });
});
