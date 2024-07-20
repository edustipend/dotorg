import React from 'react';
import { render, screen } from '@testing-library/react';
import ReferPage from './ReferPage';
import referPageTexts from './ReferPageText';

describe('ReferPage', () => {
  test('renders ReferPage correctly', () => {
    render(<ReferPage />);

    expect(screen.getByText(referPageTexts.referHeader)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referParagraph)).toBeInTheDocument();

    expect(screen.getByText('Generate Link')).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referralText)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referralLink)).toBeInTheDocument();
    expect(screen.getByText(referPageTexts.referralLinkCopy)).toBeInTheDocument();
  });
});
