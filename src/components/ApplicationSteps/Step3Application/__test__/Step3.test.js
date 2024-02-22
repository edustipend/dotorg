import { Step3Application } from "../Step3Application";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TestId, constants } from '../Internals/constants';
import { Provider } from 'react-redux';
import store from '../../../../store';
import { ModalContext } from "../../../../context/ModalContext";
const setIsActive = jest.fn();
const value = { setIsActive };

describe('Step3Application component', () => {
    it('The Step3 component should render', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step3Application />
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
                        <Step3Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.HEADER_ID)
        expect(action).toHaveTextContent(constants.HEADER)
    });
    it("The corresponding image should be present", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step3Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.IMG_ID)
        expect(action).toBeTruthy()
    });
    it("The correct data-privacy text should show", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step3Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.DATA_PRIVACY_ID)
        expect(action).toHaveTextContent(constants.DATA_PRIVACY)
    });
    it("The correct acknowledge text should show", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <Step3Application />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        )
        const action = screen.getByTestId(TestId.ACKNOWLEDGE_ID)
        expect(action).toHaveTextContent(constants.ACKNOWLEDGE)
    });
    describe("Radio button components", () => {
        it("The accept consent radio button should respond when clicked", () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <ModalContext.Provider value={value}>
                            <Step3Application />
                        </ModalContext.Provider>
                    </Provider>
                </BrowserRouter>
            )
            const action = screen.getByTestId(TestId.ACCEPT_ID)
            expect(action).toBeTruthy()
            action.click()
        });
        it("The reject consent radio button should respond when clicked", () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <ModalContext.Provider value={value}>
                            <Step3Application />
                        </ModalContext.Provider>
                    </Provider>
                </BrowserRouter>
            )
            const action = screen.getByTestId(TestId.REJECT_ID)
            expect(action).toBeTruthy()
            action.click()
        })
    })
})