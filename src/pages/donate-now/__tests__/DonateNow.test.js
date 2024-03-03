import { render, screen, fireEvent } from "@testing-library/react";
import { DonateNow } from "../DonateNow";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "../../../store";
import { TestId } from "../constants";
import { ModalContext } from "../../../context/ModalContext";
const handleToggleTransactionModal = jest.fn();
const value = { handleToggleTransactionModal };


describe("DonateNow component", () => {
    test("renders DonateNow component correctly", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <DonateNow />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        );

        const mainComponent = screen.getByTestId(TestId.COMPONENT_ID);
        expect(mainComponent).toBeInTheDocument();

        const contentSection = screen.getByTestId(TestId.CONTENT_ID);
        expect(contentSection).toBeInTheDocument();

        const imageElement = screen.getByTestId(TestId.IMAGE_ID);
        expect(imageElement).toBeInTheDocument();

        const headerElement = screen.getByTestId(TestId.HEADER_ID);
        expect(headerElement).toBeInTheDocument();

        const textElement = screen.getByTestId(TestId.TEXT_ID);
        expect(textElement).toBeInTheDocument();

        const formElement = screen.getByTestId(TestId.FORM_ID);
        expect(formElement).toBeInTheDocument();

        const buttonElement = screen.getByTestId(TestId.BUTTON_ID);
        expect(buttonElement).toBeInTheDocument();
    });

    test("handles amount change correctly", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <DonateNow />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        );

        const amountInput = screen.getByTestId(TestId.AMOUNT_ID);
        fireEvent.change(amountInput, { target: { value: "5000" } });
        expect(amountInput.value).toBe("5000");
    });

    test("The donation button should be clickable", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <ModalContext.Provider value={value}>
                        <DonateNow />
                    </ModalContext.Provider>
                </Provider>
            </BrowserRouter>
        );
        const clickSpy = jest.spyOn(fireEvent, "click");
        const donateButton = screen.getByTestId(TestId.BUTTON_ID);
        fireEvent.click(donateButton);
        expect(clickSpy).toHaveBeenCalledWith(donateButton);
    });
});
