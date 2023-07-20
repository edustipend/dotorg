import { render, screen } from "@testing-library/react";
import { testIds } from "../constants";
import { Input } from "../Input";
const { labelId, InputId } = testIds

describe('Input component', () => {
    describe('should render the right label', () => {
        it('a label should be rendered', () => {
            const mocklabel = 'FullName'
            render(<Input lable={mocklabel} />)
            const input = screen.getByTestId(labelId)
            expect(input).toHaveTextContent(mocklabel)
        })

        it('should render a default label if none is passed', () => {
            const defaultLabel = 'Some label *'
            render(<Input />)
            const input = screen.getByTestId(labelId)
            expect(input).toHaveTextContent(defaultLabel)
        })
    })

    describe('Should have an empty initial value', () => {
        it('initial value should be empty', () => {
            const mockValue = ''
            const input = screen.getByTestId(InputId)
            expect(input).toHaveValue(mockValue)
        })
    })
})