import { Step2Application } from '../Step2Application';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestId } from '../Internals/constants';
import { Provider } from 'react-redux';
import store from '../../../../store';

describe('Step2Application component', () => {
  it('The component should mount', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Step2Application />
        </Provider>
      </BrowserRouter>
    );
    const test = screen.getByTestId(TestId.COMPONENT_TEST_ID);
    expect(test).toBeInTheDocument();
  });
});
