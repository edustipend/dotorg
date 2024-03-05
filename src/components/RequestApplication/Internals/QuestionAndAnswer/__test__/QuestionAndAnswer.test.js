import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QuestionAndAnswer } from '../QuestionAndAnswer';
import store from '../../../../../store';
import { TestId } from '../../../constants';
import { reason } from '../../../../../store/reducers/ApplicationReducer';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for QuestionAndAnswer component', () => {
  it('renders QuestionAndAnswer component with default values', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <QuestionAndAnswer />
        </Provider>
      </BrowserRouter>
    );
    const question = screen.getByTestId(TestId.COMPONENT_ID);
    expect(question).toBeInTheDocument();
  });
  it('I should show the correct question', () => {
    const defaultQuestion = 'Default question';
    render(
      <BrowserRouter>
        <Provider store={store}>
          <QuestionAndAnswer />
        </Provider>
      </BrowserRouter>
    );
    const question = screen.getByTestId(TestId.QUESTION_ID);
    expect(question).toHaveTextContent(defaultQuestion);
  });
  it('Textarea is enabled', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <QuestionAndAnswer dispatchType={reason} />
        </Provider>
      </BrowserRouter>
    );
    const action = screen.getByTestId(TestId.ANSWER_ID);
    fireEvent.change(action, { target: { value: 'Test input' } });
    expect(action).toBeEnabled();
  });
});
