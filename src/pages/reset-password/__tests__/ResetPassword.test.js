import { render, screen } from "@testing-library/react";
import { ResetPassword } from "../ResetPassword";
import { TestId, constants } from "../constants";
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from "../../../context/ModalContext";
const { COMPONENT_TEST, HEADER_TEST, BUTTON_TEST, MODAL_TEST, ERROR_TEST } = TestId
const setIsActive = true
const value = { setIsActive }

describe("Reset-password component", () => {
    it("The component should render", () => {
        render(
            <BrowserRouter>
                <ModalContext.Provider value={value}>
                    <ResetPassword />
                </ModalContext.Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(COMPONENT_TEST)
        expect(action).toBeInTheDocument()
    })
    it("The header should render the correct label", () => {
        render(
            <BrowserRouter>
                <ModalContext.Provider value={value}>
                    <ResetPassword />
                </ModalContext.Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(HEADER_TEST)
        expect(action).toHaveTextContent(constants.HEADER)
    });

    it("The Modal should be hidden initially", () => {
        render(
            <BrowserRouter>
                <ModalContext.Provider value={value}>
                    <ResetPassword />
                </ModalContext.Provider>
            </BrowserRouter>
        )
        const action = screen.queryByTestId(MODAL_TEST)
        expect(action).not.toBeInTheDocument()
    });

    describe("Button test", () => {
        it("The button should be enabled by default", () => {
            render(
                <BrowserRouter>
                    <ModalContext.Provider value={value}>
                        <ResetPassword />
                    </ModalContext.Provider>
                </BrowserRouter>
            )
            const action = screen.getByTestId(BUTTON_TEST)
            expect(action).toBeEnabled()
        });

        it("The button should have the correct label", () => {
            render(
                <BrowserRouter>
                    <ModalContext.Provider value={value}>
                        <ResetPassword />
                    </ModalContext.Provider>
                </BrowserRouter>
            )
            const label = 'Submit'
            const action = screen.getByTestId(BUTTON_TEST)
            expect(action).toHaveTextContent(label)
        });
    })

    describe("Error feedback", () => {
        it("Error feedbacks should not be visible initially", () => {
            render(
                <BrowserRouter>
                    <ModalContext.Provider value={value}>
                        <ResetPassword />
                    </ModalContext.Provider>
                </BrowserRouter>
            )
            const action = screen.queryAllByTestId(ERROR_TEST)
            expect(action.length).toBe(0)
        })
    })
})


