import { SubmitUI } from "../SubmitUI";
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../../../../../../store";
import { ModalContext } from "../../../../../../context/ModalContext";
import { TestId } from "../constants";
const setIsActive = jest.fn();
const value = { setIsActive };

describe("Submit UI slide in component", () => {
    it("The component should not be in the dom", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <SubmitUI />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.queryByTestId(TestId.SUBMIT_ID)
        expect(action).toBeInTheDocument()
    });
    it("The error image should show if an error occurs", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <SubmitUI error={true} />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.queryByTestId(TestId.IMAGE_ID)
        expect(action).toBeInTheDocument()
    });
    it("The success image should show if an error occurs", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <SubmitUI error={true} />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.queryByTestId(TestId.SUCCESS_IMAGE_ID)
        expect(action).toBeInTheDocument()
    });
    describe("Button actions", () => {
        it("The create button should fire when clicked", () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <ModalContext.Provider value={value}>
                            <SubmitUI error={true} />
                        </ModalContext.Provider>
                    </Provider>
                </BrowserRouter>
            )
            const action = screen.queryByTestId(TestId.SUCCESS_BUTTON_ID)
            expect(action).toBeTruthy()
            fireEvent.click(action)
        })
    })
})