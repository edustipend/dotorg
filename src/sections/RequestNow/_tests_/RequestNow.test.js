import { render } from '@testing-library/react';
import RequestNow from '../RequestNow';
import { testConstants } from '../internals/constants';
const { componentTestId } = testConstants

describe('RequestNow conponent', () => {
    it('The component should be rendered', () => {
        const { getByTestId } = render(<RequestNow />)
        expect(getByTestId(componentTestId)).toBeInTheDocument()
    })
})