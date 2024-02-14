import { Step5Application } from "../Step5Application";
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../store';
import { ModalContext } from "../../../../context/ModalContext";
import { TestId } from "../Internals/constants";
const setIsActive = jest.fn();
const value = { setIsActive };

describe("Step5 component", () => {
    it("The component should render", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step5Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.COMPONENT_TEST_ID)
        expect(action).toBeInTheDocument()
    });
    it("The header should have the correct text", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step5Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.HEADER_ID)
        expect(action).toBeInTheDocument()
    });
    it("The descriptive image should show", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step5Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.IMAGE_ID)
        expect(action).toBeInTheDocument()
    });
    describe("Button actions", () => {
        it("The back button should be fired when clicked", () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <ModalContext.Provider value={value}>
                            <Step5Application />
                        </ModalContext.Provider>
                    </Provider>
                </BrowserRouter>
            )
            const action = screen.getByTestId(TestId.BACK_ID)
            expect(action).toBeTruthy()
            fireEvent.click(action)
        });
        it("The submit button should be triggered when clicked", () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <ModalContext.Provider value={value}>
                            <Step5Application />
                        </ModalContext.Provider>
                    </Provider>
                </BrowserRouter>
            )
            const action = screen.getByTestId(TestId.SUBMIT_ID)
            expect(action).toBeTruthy()
            action.click()
        })
    })
})