import React from 'react';
import { render, screen } from '@testing-library/react';
import ImpactProgramBenefits from '../ImpactProgramBenefits';
import { benefits, programBenefits } from '../../constants';

describe('ImpactProgramBenefits Component', () => {
  it('renders the section title and description', () => {
    render(<ImpactProgramBenefits />);

    // Check for the title
    expect(screen.getByText(programBenefits.TITLE)).toBeInTheDocument();

    // Check for the description
    expect(screen.getByText(programBenefits.DESCRIPTION)).toBeInTheDocument();
  });

  it('renders all benefit cards', () => {
    render(<ImpactProgramBenefits />);

    benefits.forEach((benefit) => {
      const titleWithIcon = `${benefit.icon} ${benefit.title}`;
      expect(screen.getByText(titleWithIcon)).toBeInTheDocument();
      expect(screen.getByText(benefit.description)).toBeInTheDocument();
    });
  });

  it('renders the Join Now button', () => {
    render(<ImpactProgramBenefits />);

    const button = screen.getByRole('button', { name: /join now/i });
    expect(button).toBeInTheDocument();
  });
});
