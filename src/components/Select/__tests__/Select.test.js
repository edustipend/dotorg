import { render, screen } from '@testing-library/react';
import { Select } from '../Select';
import { testIds } from '../constants';
const { labelId, inputId, optionsId } = testIds;

describe('Select component', () => {
  describe('The component should be in the document', () => {
    it('should show a required label', () => {
      const mockLabel = 'Select an option';
      render(<Select label={mockLabel} />);
      const label = screen.getByTestId(labelId);
      expect(label).toHaveTextContent(mockLabel);
    });

    it('should render a default label if nothing is passed', () => {
      const mockLabel = '';
      const defaultLabel = 'Some label';
      render(<Select label={mockLabel} />);
      const label = screen.getByTestId(labelId);
      expect(label).toHaveTextContent(defaultLabel);
    });
  });

  describe('Select Options', () => {
    it('options should not be in the document by default', () => {
      render(<Select />);
      const options = screen.queryByTestId(optionsId);
      expect(options).not.toBeInTheDocument();
    });
  });

  describe('The Input value', () => {
    it('should be empty by default', () => {
      const mockValue = '';
      render(<Select />);
      const input = screen.getByTestId(inputId);
      expect(input).toHaveValue(mockValue);
    });
  });
});
