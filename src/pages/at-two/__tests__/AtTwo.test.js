import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from '../../../context/ModalContext';
import { SidebarProvider } from '../../../context/SidebarContext';
import { TestId } from '../constants';
import { AtTwo } from '../AtTwo';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([
  /* middlewares */
]);
const store = mockStore({
  user: {
    name: 'Test User'
  }
});

describe('Edustipend at Two', () => {
  describe('renders the Edustipend at two page', () => {
    it('is visible in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <SidebarProvider>
                <AtTwo />
              </SidebarProvider>
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.AT_TWO)).toBeInTheDocument();
    });
  });
});
