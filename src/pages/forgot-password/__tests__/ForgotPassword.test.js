import { render, screen } from '@testing-library/react';
import { ForgotPassword } from '../ForgotPassword';
import { BrowserRouter } from 'react-router-dom';
import { ModalContext } from '../../../context/ModalContext';
import { TestId, constants } from '../constants';
const { COMPONENT_TEST, HEADER_TEST, TEXT_TEST, BUTTON_TEST, FOOT_NOTE_TEST } = TestId;
const setIsActive = true;
const value = { setIsActive };

describe('Forgot Password Test', () => {
  it('The component should mount', () => {
    render(
      <BrowserRouter>
        <ModalContext.Provider value={value}>
          <ForgotPassword />
        </ModalContext.Provider>
      </BrowserRouter>
    );
    const action = screen.getByTestId(COMPONENT_TEST);
    expect(action).toBeInTheDocument();
  });

  it('The header should render the correct label', () => {
    render(
      <BrowserRouter>
        <ModalContext.Provider value={value}>
          <ForgotPassword />
        </ModalContext.Provider>
      </BrowserRouter>
    );
    const action = screen.getByTestId(HEADER_TEST);
    expect(action).toHaveTextContent(constants.HEADER);
  });

  it('The subtext should render correctly', () => {
    render(
      <BrowserRouter>
        <ModalContext.Provider value={value}>
          <ForgotPassword />
        </ModalContext.Provider>
      </BrowserRouter>
    );
    const action = screen.getByTestId(TEXT_TEST);
    expect(action).toHaveTextContent(constants.TEXT);
  });

  it('The Foot note should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <ModalContext.Provider value={value}>
          <ForgotPassword />
        </ModalContext.Provider>
      </BrowserRouter>
    );
    const action = screen.getByTestId(FOOT_NOTE_TEST);
    expect(action).toHaveTextContent(constants.FOOT_NOTE);
  });

  describe('Button test', () => {
    it('The button should be disabled by default', () => {
      render(
        <BrowserRouter>
          <ModalContext.Provider value={value}>
            <ForgotPassword />
          </ModalContext.Provider>
        </BrowserRouter>
      );
      const action = screen.getByTestId(BUTTON_TEST);
      expect(action).toBeDisabled();
    });

    it('The button should have the correct label', () => {
      render(
        <BrowserRouter>
          <ModalContext.Provider value={value}>
            <ForgotPassword />
          </ModalContext.Provider>
        </BrowserRouter>
      );
      const label = 'Send instructions';
      const action = screen.getByTestId(BUTTON_TEST);
      expect(action).toHaveTextContent(label);
    });
  });
});
