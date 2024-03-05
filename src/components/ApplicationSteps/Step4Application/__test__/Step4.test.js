import { Step4Application } from '../Step4Application';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestId, constants } from '../Internals/constants';
import { Provider } from 'react-redux';
import store from '../../../../store';

describe('Step4Application component', () => {
  it('The component should mount', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Step4Application />
        </Provider>
      </BrowserRouter>
    );
    const test = screen.getByTestId(TestId.COMPONENT_TEST_ID);
    expect(test).toBeInTheDocument();
  });
  it('The header should have the correct text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Step4Application />
        </Provider>
      </BrowserRouter>
    );
    const action = screen.getByTestId(TestId.HEADER_ID);
    expect(action).toHaveTextContent(constants.HEADER);
  });
  describe('Form fields section', () => {
    it('The form should have n childNodes', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Step4Application />
          </Provider>
        </BrowserRouter>
      );
      const action = screen.getByTestId(TestId.FORM_ID);
      expect(action.childNodes).toHaveLength(6);
    });
  });
  describe('Button click events', () => {
    it('The next button should respond when clicked', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Step4Application />
          </Provider>
        </BrowserRouter>
      );
      const action = screen.getByTestId(TestId.NEXT_ID);
      expect(action).toBeTruthy();
      fireEvent.click(action);
    });
    it('The back button should respond when clicked', () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Step4Application />
          </Provider>
        </BrowserRouter>
      );
      const action = screen.getByTestId(TestId.BACK_ID);
      expect(action).toBeTruthy();
      fireEvent.click(action);
    });
  });
});
