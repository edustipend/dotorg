import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Accordion } from '../Accordion';
import styles from '../Accordion.module.css';


jest.mock('../../../assets', () => ({
  ArrowDownChev: 'mock-arrow-down-chev.svg'
}));

describe('Accordion with data-testid', () => {
  const defaultProps = {
    question: 'What is the application deadline?',
    answer: 'The application deadline is December 1st. Make sure to submit all your documents before this date.'
  };

  test('renders accordion with default data-testid', () => {
    render(<Accordion {...defaultProps} />);
    expect(screen.getByTestId('accordion-component')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-component-header')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-component-toggle-button')).toBeInTheDocument();
    expect(screen.getByTestId('accordion-component-answer-container')).toBeInTheDocument();
  });

  test('renders accordion with custom data-testid', () => {
    render(<Accordion {...defaultProps} dataTest="my-custom-accordion-test" />);
    expect(screen.getByTestId('my-custom-accordion-test')).toBeInTheDocument();
    expect(screen.getByTestId('my-custom-accordion-test-header')).toBeInTheDocument();
    expect(screen.getByTestId('my-custom-accordion-test-toggle-button')).toBeInTheDocument();
    expect(screen.getByTestId('my-custom-accordion-test-answer-container')).toBeInTheDocument();
  });

  test('toggles the accordion open and closed on header click using data-testid', async () => {
    render(<Accordion {...defaultProps} />);

    const header = screen.getByTestId('accordion-component-header');
    const answerContainer = screen.getByTestId('accordion-component-answer-container');

    expect(answerContainer).toHaveStyle('height: 0px');

    fireEvent.click(header);

    fireEvent.transitionEnd(answerContainer);

    await waitFor(
      () => {
        expect(answerContainer).toHaveStyle('height: auto');
      },
      { timeout: 100 }
    );

    fireEvent.click(header);

    await waitFor(
      () => {
        expect(answerContainer).toHaveStyle('height: 0px');
      },
      { timeout: 100 }
    );
  });

  test('button icon rotates when accordion is open', async () => {
    render(<Accordion {...defaultProps} />);
    const toggleButton = screen.getByTestId('accordion-component-toggle-button');
    const buttonIcon = screen.getByAltText('');

    expect(buttonIcon).not.toHaveClass(styles.rotate);

    fireEvent.click(toggleButton);
    expect(buttonIcon).toHaveClass(styles.rotate);

    fireEvent.click(toggleButton);
    expect(buttonIcon).not.toHaveClass(styles.rotate);
  });
});