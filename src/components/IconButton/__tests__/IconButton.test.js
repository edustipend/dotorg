import { render, fireEvent, screen } from '@testing-library/react';
import { IconButton } from '../IconButton';
import { TestId } from '../constants';

describe('Icon Button component', () => {
  it('fires the icon when clicked', () => {
    const mockClickHandler = jest.fn();
    render(<IconButton dataTest={TestId.ICON_BUTTON} onClick={mockClickHandler} className={'class'}></IconButton>);
    fireEvent.click(screen.getByTestId(TestId.ICON_BUTTON));
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
