import { render, screen } from '@testing-library/react';
import { Request } from '../Request';
import { testConstants } from '../internals/constants';
const { componentTestId } = testConstants

describe('RequestNow conponent', () => {
    it('The component should be rendered', () => {
        render(<Request />)
        expect(screen.getByTestId(componentTestId)).toBeInTheDocument()
    })
})