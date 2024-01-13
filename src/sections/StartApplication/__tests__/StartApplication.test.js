import { render, screen } from '@testing-library/react';
import { StartApplication } from '../StartApplication';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import { TestId } from '../constants';
import { ModalContextProvider } from '../../../context/ModalContext';

describe('StartApplication component', () => {
  describe('renders the correct StartApplication component', () => {
    it('shows the StartApplication component in the document', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalContextProvider> {/* Include ModalContextProvider */}
              <StartApplication />
            </ModalContextProvider>
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DATA_TEST)).toBeInTheDocument();
    });
  });
});
