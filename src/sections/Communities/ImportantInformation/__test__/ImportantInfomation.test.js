import React from 'react';
import { render, screen } from '@testing-library/react';
import ImportantInformation from './ImportantInformation';
import { importantInfo } from './constant';

describe('ImportantInformation Component', () => {
  test('renders title and description', () => {
    render(<ImportantInformation />);

    // Check if the title is rendered
    expect(screen.getByRole('heading', { name: importantInfo.title })).toBeInTheDocument();

    // Check if the description text is rendered
    expect(screen.getByText(importantInfo.text)).toBeInTheDocument();
  });

  test('renders the button with correct label', () => {
    render(<ImportantInformation />);

    // Check for the button with the label
    const button = screen.getByRole('button', { name: /read terms and conditions/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('infoButton'); // Optional: check class if needed
  });
});
