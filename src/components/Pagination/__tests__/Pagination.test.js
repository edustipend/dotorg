import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../Pagination';
import { Texts } from '../constants';

describe('Pagination component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  const renderPagination = ({ onPageChange = mockOnChange, currentPage = 1, itemsPerPage = 5, showViewAll = false, noOfPages } = {}) => {
    return render(
      <Pagination onPageChange={onPageChange} currentPage={currentPage} itemsPerPage={itemsPerPage} showViewAll={showViewAll} noOfPages={noOfPages} />
    );
  };

  it('renders basic structure', () => {
    renderPagination();

    expect(screen.getByText(Texts.PREV_TEXT)).toBeInTheDocument();
    expect(screen.getByText(Texts.NEXT_TEXT)).toBeInTheDocument();
  });

  it('renders "Prev" and "Next" buttons correctly', () => {
    render(<Pagination onPageChange={mockOnChange} currentPage={1} itemsPerPage={5} showViewAll={false} />);

    expect(screen.getByText(/Prev/)).toBeInTheDocument();
    expect(screen.getByText(/Next/)).toBeInTheDocument();
  });

  it('clicking on "Next" button increments currentPage', () => {
    render(<Pagination onPageChange={mockOnChange} currentPage={1} itemsPerPage={5} showViewAll={false} />);
    const nextButton = screen.getByText(/Next/);

    fireEvent.click(nextButton);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('clicking on "Prev" button decrements currentPage', () => {
    render(<Pagination onPageChange={mockOnChange} currentPage={2} itemsPerPage={5} showViewAll={false} />);
    const prevButton = screen.getByText(/Prev/);

    fireEvent.click(prevButton);
    expect(mockOnChange).toHaveBeenCalledWith(1);
  });
});
