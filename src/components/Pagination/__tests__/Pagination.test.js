import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination component', () => {
  const mockOnPageChange = jest.fn();

  it('renders page numbers correctly', () => {
    render(<Pagination onPageChange={mockOnPageChange} currentPage={1} ITEMS_PER_PAGE={5} showViewAll={false} />);

    const pageButtons = screen.getAllByRole('button', { name: /[1-9]/ });

    pageButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it('renders "Prev" and "Next" buttons correctly', () => {
    render(<Pagination onPageChange={mockOnPageChange} currentPage={1} ITEMS_PER_PAGE={5} showViewAll={false} />);

    expect(screen.getByText(/Prev/)).toBeInTheDocument();
    expect(screen.getByText(/Next/)).toBeInTheDocument();
  });

  it('clicking on "Next" button increments currentPage', () => {
    render(<Pagination onPageChange={mockOnPageChange} currentPage={1} ITEMS_PER_PAGE={5} showViewAll={false} />);
    const nextButton = screen.getByText(/Next/);

    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('clicking on "Prev" button decrements currentPage', () => {
    render(<Pagination onPageChange={mockOnPageChange} currentPage={2} ITEMS_PER_PAGE={5} showViewAll={false} />);
    const prevButton = screen.getByText(/Prev/);

    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
