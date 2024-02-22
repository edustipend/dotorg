import { LaptopStipend } from "../LaptopStipend";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TestId } from "../../../constants";
import store from "../../../../../store";

describe("Laptop Stipend Component", () => {
    it("the component should render correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LaptopStipend />
                </BrowserRouter>
            </Provider>
        )
        const laptop = screen.getByTestId(TestId.LAPTOP_STIPEND)
        expect(laptop).toBeInTheDocument()
    });
    it("The component should have 5 nodes", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LaptopStipend />
                </BrowserRouter>
            </Provider>
        )
        const nodes = screen.getByTestId(TestId.LAPTOP_STIPEND)
        expect(nodes.childNodes).toHaveLength(5)
    })
})