import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Request } from '../Request';
import { TestId } from '../constants';
import { ModalContextProvider } from '../../../context/ModalContext';
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

describe('RequestNow conponent', () => {
  it('The component should be rendered', () => {
    render(
      <Provider store={store}>
        <ModalContextProvider>
          <BrowserRouter>
            <Request />
          </BrowserRouter>
        </ModalContextProvider>
      </Provider>
    );
    expect(screen.getByTestId(TestId.REQUEST_SECTION)).toBeInTheDocument();
  });
});
