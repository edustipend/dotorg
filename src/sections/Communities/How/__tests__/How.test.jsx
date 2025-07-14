import { render, screen } from '@testing-library/react';
import { content, TestId } from '../constants';
import How from '../How';

describe('How component', () => {
  it('renders the wrapper', () => {
    render(<How />);
    expect(screen.getByTestId(TestId.WRAPPER)).toBeInTheDocument();
  });

  it('renders the header text', () => {
    render(<How />);
    expect(screen.getByTestId(TestId.HEAD_TEXT)).toHaveTextContent(content.headText);
  });

  it('renders the sub text', () => {
    render(<How />);
    expect(screen.getByTestId(TestId.SUB_TEXT)).toHaveTextContent(content.subText);
  });

  it('renders the correct number of how steps', () => {
    render(<How />);
    const steps = screen.getAllByTestId(TestId.HOW_STEP);
    expect(steps.length).toBe(content.how.length);
  });

  it('renders each step with correct title and description', () => {
    render(<How />);
    content.how.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
      expect(screen.getByAltText(step.title)).toBeInTheDocument();
    });
  });
});
