import React from 'react';
import { render, screen } from '@testing-library/react';
import ImpactProgramBenefits from '../ImpactProgramBenefits';
import { benefits, programBenefits } from '../../constants';
import { MemoryRouter } from 'react-router-dom';

describe('ImpactProgramBenefits Component', () => {
  const renderWithRouter = (ui) => render(ui, { wrapper: MemoryRouter }); 

  it('renders the section title and description', () => {
    renderWithRouter(<ImpactProgramBenefits />);

    expect(screen.getByText(programBenefits.TITLE)).toBeInTheDocument();
    expect(screen.getByText(programBenefits.DESCRIPTION)).toBeInTheDocument();
  });

  it('renders all benefit cards', () => {
    renderWithRouter(<ImpactProgramBenefits />);

    benefits.forEach((benefit) => {
      const titleWithIcon = `${benefit.icon} ${benefit.title}`;
      expect(screen.getByText(titleWithIcon)).toBeInTheDocument();
      expect(screen.getByText(benefit.description)).toBeInTheDocument();
    });
  });

  it('renders the Join Now button', () => {
    renderWithRouter(<ImpactProgramBenefits />);

    const button = screen.getByRole('button', { name: /join now/i });
    expect(button).toBeInTheDocument();
  });
});
