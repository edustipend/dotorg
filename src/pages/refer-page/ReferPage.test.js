import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReferPage from './ReferPage';
import referPageTexts, { TestId } from './constants';
import { getData, postData } from '../../services/ApiClient';

jest.mock('../../services/ApiClient');

describe('ReferPage', () => {
  beforeEach(() => {
    getData.mockClear();
    postData.mockResolvedValue({
      status: true,
      data: {
        _id: '66ab237667ccd655df8bb8d6',
        email: 'test@user.com',
        name: 'Test User',
        originalURL:
          'https://www.edustipend.org/support-a-learner?utm_campaign=Edustipend%20at%202&utm_medium=test@user.com&utm_referrer=Test%20User&utm_source=',
        secureShortURL: 'https://go.edustipend.org/5KXHNv',
        shortURL: 'http://go.edustipend.org/5KXHNv',
        title: 'Edustipend | Support A Learner - Refer a Friend: Test User'
      }
    });
  });

  test('renders ReferPage correctly', () => {
    render(<ReferPage />);

    expect(screen.getByText(referPageTexts.referHeader)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referParagraph)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.generateLink)).toBeInTheDocument();

    expect(screen.getByText(referPageTexts.referralText)).toBeInTheDocument();
  });

  test('clicking on generate link shows the spinner when loading', async () => {
    render(<ReferPage />);

    // Get the input elements
    const emailInput = screen.getByTestId(TestId.EMAIL_INPUT);
    const nameInput = screen.getByTestId(TestId.NAME_INPUT);

    // Change the value of the input elements
    fireEvent.change(emailInput, { target: { value: 'test@user.com' } });
    fireEvent.change(nameInput, { target: { value: 'Test User' } });

    // Simulate clicking the "Generate Link" button
    fireEvent.click(screen.getByText(referPageTexts.generateLink));

    expect(screen.getByTestId('loader-id')).toBeInTheDocument();
  });

  test('copies referral link to clipboard', async () => {
    render(<ReferPage />);

    // Mock the clipboard API
    const writeTextMock = jest.fn().mockResolvedValue();
    navigator.clipboard = { writeText: writeTextMock };

    // Get the input elements
    const emailInput = screen.getByTestId(TestId.EMAIL_INPUT);
    const nameInput = screen.getByTestId(TestId.NAME_INPUT);

    // Change the value of the input fields
    fireEvent.change(emailInput, { target: { value: 'test@user.com' } });
    fireEvent.change(nameInput, { target: { value: 'Test User' } });

    expect(emailInput.value).toBe('test@user.com');
    expect(nameInput.value).toBe('Test User');

    // Simulate clicking the "Generate Link" button
    fireEvent.click(screen.getByText(referPageTexts.generateLink));

    // Simulate 2 seconds delay
    await new Promise((r) => setTimeout(r, 2000));

    // Simulate clicking the "Copy" button
    fireEvent.click(screen.getByText(referPageTexts.referralLinkCopy));

    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });
});
