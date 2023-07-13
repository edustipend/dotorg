/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import { TestConstants } from '../testimonialsData';
import Testimonials from '../Testimonials'
const { componentTestId, leftBtnTestId, rightBtnTestId, paginationTestId, pagTestId } = TestConstants

describe('Testimonials', () => {
    describe('The component should render correctly', () => {
        it('Testimonials component should  be in the document', () => {
            const { getByTestId } = render(<Testimonials />);
            expect(getByTestId(componentTestId)).toBeInTheDocument();
        })
    })

    describe('The arrows should only fire when clicked', () => {
        it('the left arrow should not fire without a click', () => {
            const ClickHandler = jest.fn();
            const { getByTestId } = render(<Testimonials onClick={ClickHandler} />)
            fireEvent.click(getByTestId(leftBtnTestId))
            expect(ClickHandler).not.toHaveBeenCalled()
        })

        it('the right arrow should not fire without a click', () => {
            const ClickHandler = jest.fn();
            const { getByTestId } = render(<Testimonials onClick={ClickHandler} />)
            fireEvent.click(getByTestId(rightBtnTestId))
            expect(ClickHandler).not.toHaveBeenCalled()
        })

    })

    describe('pagination', () => {
        it('should have 5 nodes', () => {
            const { getByTestId } = render(<Testimonials />)
            expect(getByTestId(paginationTestId).children.length).toBe(5)
        })
        it('pagination elements should only fire when clicked', () => {
            const ClickHandler = jest.fn();
            const { getAllByTestId } = render(<Testimonials onClick={ClickHandler} />)
            fireEvent.click(getAllByTestId(pagTestId)[0])
            expect(ClickHandler).not.toHaveBeenCalled()
        })
    })

})