import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Reports } from '../Reports';
import { Provider } from 'react-redux';
import store from '../../../store';
import { ModalContext } from '../../../context/ModalContext';
import { HEAD_TEXT, SUB_TEXT, TestId } from '../constants';
import Pagination from '../internals/Pagination';

const setIsActive = jest.fn();
const value = { setIsActive };

describe('Reports component', () => {
  describe('The correct Reports component', () => {
    test('shows the Reports component in the document', () => {
      render(
        <BrowserRouter>
          <Reports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.REPORT_DOC)).toBeInTheDocument();
    });

    test('shows Monthly Report header text', () => {
      render(
        <BrowserRouter>
          <Reports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(HEAD_TEXT);
    });

    test('shows the description sub text', () => {
      render(
        <BrowserRouter>
          <Reports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SUB_TEXT)).toHaveTextContent(SUB_TEXT);
    });
  });

  describe('The Reports', () => {
    test('The Reports is available in the dom', () => {
      render(
        <BrowserRouter>
          <Reports />
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.REPORTS)).toBeInTheDocument();
    });
    test('Clicking the filter button shows the dropdown options.', () => {
      render(
        <BrowserRouter>
          <Reports />
        </BrowserRouter>
      );
      const filterBtn = screen.getByTestId(TestId.FILTER_BTN);
      fireEvent.click(filterBtn);

      expect(screen.getByTestId(TestId.DROP_DOWN)).toBeVisible();
    });
    test('A report button, when fired, shows the report modal.', async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalContext.Provider value={value}>
              <Reports />
            </ModalContext.Provider>
          </Provider>
        </BrowserRouter>
      );
      const reportBtns = screen.getAllByTestId(TestId.REPORT_BTN);
      fireEvent.click(reportBtns[0]);

      // Wait for the modal to be added to the DOM
      const modals = await screen.findAllByTestId(TestId.MODAL);

      // Check if the first modal is visible
      expect(modals[0]).toBeVisible();
    });
  });

  describe('Pagination component', () => {
    test('renders pagination buttons correctly', () => {
      const totalPages = 5;
      const currentPage = 3;
      const onPageChangeMock = jest.fn();

      render(<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChangeMock} />);

      expect(screen.getByTestId(TestId.PAGINATION_CONTAINER)).toBeInTheDocument();

      // Check if all pagination buttons are rendered
      for (let i = 1; i <= totalPages; i++) {
        const button = screen.getByText(i.toString());
        expect(button).toBeInTheDocument();
      }

      // Check if the active button has the correct className
      const activeButton = screen.getByText(currentPage.toString());
      expect(activeButton).toHaveClass('active');

      // Check if clicking a button triggers onPageChange event
      fireEvent.click(activeButton);
      expect(onPageChangeMock).toHaveBeenCalledWith(currentPage);

      // Check if clicking a different button triggers onPageChange event with the correct page number
      const nextPage = currentPage + 1;
      const nextPageButton = screen.getByText(nextPage.toString());
      fireEvent.click(nextPageButton);
      expect(onPageChangeMock).toHaveBeenCalledWith(nextPage);
    });
  });
});
