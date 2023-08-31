import { render, screen } from '@testing-library/react';
import { Select } from '../Select';
import { TestId } from '../constants';
import { Provider } from 'react-redux';
import store from '../../../store';
const { LABEL_ID, INPUT_ID, OPTIONS_ID } = TestId;

describe('Select component', () => {
  describe('The component should be in the document', () => {
    it('should show a required label', () => {
      const mockLabel = 'Select an option';
      render(
        <Provider store={store}>
          <Select label={mockLabel} />
        </Provider>
      );
      const label = screen.getByTestId(LABEL_ID);
      expect(label).toHaveTextContent(mockLabel);
    });

    it('should render a default label if nothing is passed', () => {
      const defaultLabel = 'Some label';
      render(
        <Provider store={store}>
          <Select />
        </Provider>
      );
      const label = screen.getByTestId(LABEL_ID);
      expect(label).toHaveTextContent(defaultLabel);
    });
  });

  describe('Select Options', () => {
    it('options should not be in the document by default', () => {
      render(
        <Provider store={store}>
          <Select />
        </Provider>
      );
      const options = screen.queryByTestId(OPTIONS_ID);
      expect(options).not.toBeInTheDocument();
    });
  });

  describe('The Input value', () => {
    it('should be empty by default', () => {
      const mockValue = '';
      render(
        <Provider store={store}>
          <Select />
        </Provider>
      );
      const input = screen.getByTestId(INPUT_ID);
      expect(input).toHaveValue(mockValue);
    });
  });
});
