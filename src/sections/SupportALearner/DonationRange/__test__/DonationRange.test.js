import { render, screen, fireEvent } from "@testing-library/react";
import { DonationRange } from "../DonationRange";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { TestId } from "../constants";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn()
  }));

describe("DonationRange component", () => {
  test("renders DonationRange component correctly", () => {
    render(
      <BrowserRouter>
        <DonationRange />
      </BrowserRouter>
    );
    const mainComponent = screen.getByTestId(TestId.COMPONENT_ID);
    expect(mainComponent).toBeInTheDocument();

    const titleElement = screen.getByTestId(TestId.TITLE_ID);
    expect(titleElement).toBeInTheDocument();

    const rangeContainer = screen.getByTestId(TestId.RANGE_CONTAINER_ID);
    expect(rangeContainer).toBeInTheDocument();

    const donationText = screen.getByTestId(TestId.DONATION_TEXT_ID);
    expect(donationText).toBeInTheDocument();

    const donationInput = screen.getByTestId(TestId.DONATION_INPUT);
    expect(donationInput).toBeInTheDocument();

    const donationButton = screen.getByTestId(TestId.DONATION_BUTTON);
    expect(donationButton).toBeInTheDocument();
  });

  test("handles navigation correctly when button is clicked", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(
      <BrowserRouter>
        <DonationRange />
      </BrowserRouter>
    );

    const donationButton = screen.getByTestId(TestId.DONATION_BUTTON);
    fireEvent.click(donationButton);
    expect(useNavigate).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/support-a-learner/donate", {
      state: { value: 5000 }
    });
  });
});
