import { Step1Application } from "../Step1Application";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TESTIDS } from "../Internals/constants";
import { content } from "../Internals/constants";
const { COMPONENT_ID, HEADER_ID } = TESTIDS

describe("Tests for the step1 application component", () => {
    it("The component should render", () => {
        render(
            <BrowserRouter>
                <Step1Application />
            </BrowserRouter>
        )
        const test = screen.getByTestId(COMPONENT_ID)
        expect(test).toBeInTheDocument()
    })
    it("The header should render the correct text", () => {
        render(
            <BrowserRouter>
                <Step1Application />
            </BrowserRouter>
        )
        const test = screen.getByTestId(HEADER_ID)
        expect(test).toHaveTextContent(content.HEADING)
    })
})