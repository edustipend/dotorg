/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import Carousel from '../Carousel';
import { TestConstants } from '../constants';
import { cardData } from '../../../sections/Testimonials/internals/card/cardData';
const { leftBtnTestId, rightBtnTestId, paginationTestId, pagTestId } = TestConstants;

describe('Carousel', () => {
  describe('The arrows should only fire when clicked', () => {
    it('the left arrow should not fire without a click', () => {
      const ClickHandler = jest.fn();
      render(<Carousel onClick={ClickHandler} />);
      fireEvent.click(screen.getByTestId(leftBtnTestId));
      expect(ClickHandler).not.toHaveBeenCalled();
    });

    it('the right arrow should not fire without a click', () => {
      const ClickHandler = jest.fn();
      render(<Carousel onClick={ClickHandler} />);
      fireEvent.click(screen.getByTestId(rightBtnTestId));
      expect(ClickHandler).not.toHaveBeenCalled();
    });
  });

  describe('pagination', () => {
    it('should have 5 nodes', () => {
      render(<Carousel cardData={cardData} />);
      expect(screen.getByTestId(paginationTestId).children.length).toBe(5);
    });
    it('pagination elements should only fire when clicked', () => {
      const ClickHandler = jest.fn();
      render(<Carousel cardData={cardData} onClick={ClickHandler} />);
      fireEvent.click(screen.getAllByTestId(pagTestId)[0]);
      expect(ClickHandler).not.toHaveBeenCalled();
    });
  });
});
