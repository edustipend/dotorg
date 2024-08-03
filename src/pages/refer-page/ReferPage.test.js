import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReferPage from './ReferPage';
import referPageTexts from './constants';
import { getData } from '../../services/ApiClient';

jest.mock('../../services/ApiClient');

describe('ReferPage', () => {
  beforeEach(() => {
    getData.mockClear();
  });

  test('renders ReferPage correctly', () => {
    render(<ReferPage />);

    expect(screen.getByText(referPageTexts.referHeader)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referParagraph)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.generateLink)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referralText)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referralLinkCopy)).toBeInTheDocument();
  });

  test('copies referral link to clipboard', async () => {
    render(<ReferPage />);

    // Mock the clipboard API
    const writeTextMock = jest.fn().mockResolvedValue();
    navigator.clipboard = { writeText: writeTextMock };

    // Simulate clicking the "Copy" button
    fireEvent.click(screen.getByText(referPageTexts.referralLinkCopy));

    // Check if the referral link was copied to the clipboard
    expect(writeTextMock).toHaveBeenCalledWith(referPageTexts.referralLink);

    // Check if the "Copied!" message is displayed
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => expect(screen.getByText('Copied!')).toBeInTheDocument());

    // Check if the "Copied!" message disappears after 2 seconds
    await new Promise((r) => setTimeout(r, 3000));
    expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
  });
});
