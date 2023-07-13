/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { TestConstants } from '../internals/testimonialsData';
import { Testimonials } from '../Testimonials'
const { componentTestId } = TestConstants

describe('Testimonials', () => {
    describe('The component should render correctly', () => {
        it('Testimonials component should  be in the document', () => {
            const { getByTestId } = render(<Testimonials />);
            expect(getByTestId(componentTestId)).toBeInTheDocument();
        })
    })

})