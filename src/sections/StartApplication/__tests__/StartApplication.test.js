import { render, screen } from '@testing-library/react';
import { StartApplication } from '../StartApplication';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import { TestId } from '../constants';

describe('StartApplication component', () => {
  describe('renders the correct StartApplication component', () => {
    it('shows the StartApplication component in the document', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <StartApplication />
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DATA_TEST)).toBeInTheDocument();
    });
    it('shows the stipend application text', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <StartApplication />
          </Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.DATA_TEST)).toHaveTextContent(TestId.HEAD_TEXT);
    });
  });
});
