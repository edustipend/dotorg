import { Step1Application } from '../Step1Application';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestId } from '../Internals/constants';
import { Provider } from 'react-redux';
import store from '../../../../store';
import { content } from '../Internals/constants';
const { COMPONENT_ID, HEADER_ID } = TestId;

describe('Tests for the step1 application component', () => {
  it('The component should render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Step1Application />
        </Provider>
      </BrowserRouter>
    );
    const test = screen.getByTestId(COMPONENT_ID);
    expect(test).toBeInTheDocument();
  });
  it('The header should render the correct text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Step1Application />
        </Provider>
      </BrowserRouter>
    );
    const test = screen.getByTestId(HEADER_ID);
    expect(test).toHaveTextContent(content.HEADING);
  });
});
