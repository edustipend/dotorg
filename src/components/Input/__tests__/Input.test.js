import { render, screen } from '@testing-library/react';
import { TestId } from '../constants';
import { Input } from '../Input';
import { Provider } from 'react-redux';
import store from '../../../store';
const { LABEL_ID, INPUT_ID } = TestId;

describe('Input component', () => {
  describe('should render the right label', () => {
    it('a label should be rendered', () => {
      const mocklabel = 'Some label';
      render(
        <Provider store={store}>
          <Input lable={mocklabel} />
        </Provider>
      );
      const input = screen.getByTestId(LABEL_ID);
      expect(input).toHaveTextContent(mocklabel);
    });

    it('should render a default label if none is passed', () => {
      const defaultLabel = 'Some label';
      render(
        <Provider store={store}>
          <Input />
        </Provider>
      );
      const input = screen.getByTestId(LABEL_ID);
      expect(input).toHaveTextContent(defaultLabel);
    });
  });

  describe('Should have an empty initial value', () => {
    it('initial value should be empty', () => {
      const mockValue = '';
      render(
        <Provider store={store}>
          <Input />
        </Provider>
      );
      const input = screen.getByTestId(INPUT_ID);
      expect(input).toHaveValue(mockValue);
    });
  });
});
