import { render, fireEvent } from '@testing-library/react';
import { Button } from '../Button';
import { DEFAULT_BUTTON_LABEL, TestId } from '../constants';


describe('Button component', () => {
	describe('renders the correct button label', () => {
		it('shows the right button text', () => {
			const mockButtonLabel = 'Request stipend';
			const { getByTestId } = render(<Button label={mockButtonLabel} />);
			expect(getByTestId(TestId.DEFAULT_BUTTON_TEST_ID)).toHaveTextContent(mockButtonLabel);
		})

		it('shows a default text when an empty string is passed a label', () => {
			const mockButtonLabel = '';
			const { getByTestId } = render(<Button label={mockButtonLabel} />);
			expect(getByTestId(TestId.DEFAULT_BUTTON_TEST_ID)).toHaveTextContent(DEFAULT_BUTTON_LABEL);
		})
	});

	describe('click handler works as it should', () => {
		it('fires the click handler on button', async () => {
			const mockButtonLabel = 'Request stipend';
			const mockClickHandler = jest.fn();
			const { getByTestId } = render(<Button label={mockButtonLabel} onClick={mockClickHandler} />);
			fireEvent.click(getByTestId(TestId.DEFAULT_BUTTON_TEST_ID));
			expect(mockClickHandler).toHaveBeenCalled();
		});
	});
})

