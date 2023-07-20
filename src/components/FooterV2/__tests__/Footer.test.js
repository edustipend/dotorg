import { BrowserRouter as Router } from "react-router-dom";
import { FooterV2 } from "../FooterV2";
import { render, screen } from "@testing-library/react";
import { TestConstants } from "../internals/constants";
const { Component_testid, Links_testid } = TestConstants

describe("Footer", () => {
    it("The footer should be in the document", () => {
        render(
            <Router>
                <FooterV2 />
            </Router>
        )
        const footer = screen.getByTestId(Component_testid)
        expect(footer).toBeInTheDocument()
    })
    it("The footer links should be visible", () => {
        render(
            <Router>
                <FooterV2 />
            </Router>
        )
        const links = screen.getAllByTestId(Links_testid)
        expect(links[0]).toBeInTheDocument()
    })
})