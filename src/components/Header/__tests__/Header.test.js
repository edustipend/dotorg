import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header component", () => {
  describe("renders header component", () => {
    it("header component should be visible", () => {
        render(<Header />);
        const headerComponent = screen.getByTestId("headerId");
      expect(headerComponent).toBeVisible();
    });
  });
});
