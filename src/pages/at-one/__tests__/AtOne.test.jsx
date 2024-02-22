import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from '../../../context/ModalContext';
import { SidebarProvider } from '../../../context/SidebarContext';
import { TestId } from '../constants';
import { AtOne } from '../AtOne';
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

describe('Edustipend at one', () => {
  describe('renders the at one page', () => {
    it('is visible in the document', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ModalContextProvider>
              <SidebarProvider>
                <AtOne />
              </SidebarProvider>
            </ModalContextProvider>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId(TestId.AT_ONE)).toBeInTheDocument();
    });
  });
});
