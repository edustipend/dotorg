import React from 'react';
import { render, screen } from '@testing-library/react';
import ImpactProgramOverview from '../ImpactProgramOverview';
import { leadershipCallToAction } from '../../constants';

describe('ImpactProgramOverview', () => {
  it('renders the Program Overview section with all content', () => {
    render(<ImpactProgramOverview />);

    // Section label
    expect(screen.getByText(/Program Overview/i)).toBeInTheDocument();

    // Heading/title
    expect(
      screen.getByRole('heading', {
        name: leadershipCallToAction.CALL_TO_ACTION_TITLE
      })
    ).toBeInTheDocument();

    // Paragraphs
    expect(screen.getByText(leadershipCallToAction.PARAGRAPH_ONE)).toBeInTheDocument();
    expect(screen.getByText(leadershipCallToAction.PARAGRAPH_TWO)).toBeInTheDocument();

    // Timeline info
    expect(screen.getByText(leadershipCallToAction.APPLICATION_START_DATE)).toBeInTheDocument();
    expect(screen.getByText(leadershipCallToAction.APPLICATOIN_END_DATE)).toBeInTheDocument();

    // Timeline labels
    expect(screen.getByText(leadershipCallToAction.TIMELINE_ONE)).toBeInTheDocument();
    expect(screen.getByText(leadershipCallToAction.TIMELINE_TWO)).toBeInTheDocument();
  });
});
