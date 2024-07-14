import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MeetTheTeam from '../MeetTheTeam';

jest.mock('react-slick', () => {
  // eslint-disable-next-line react/prop-types
  const MockSlider = ({ children }) => <div>{children}</div>;
  MockSlider.displayName = 'MockSlider';
  return MockSlider;
});

describe('MeetTheTeam Component', () => {
  test('renders the component with team members', () => {
    render(<MeetTheTeam />);

    // Check if the heading is rendered
    expect(screen.getByText(/Meet our team of/i)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(/Get to Know the Passionate Individuals/i)).toBeInTheDocument();

    // Check if each team member is rendered
    const teamMembers = ['Uduak Obong-Eren', 'Blessing Akpan', 'Joshua Alhassan'];

    teamMembers.forEach((member) => {
      expect(screen.getByText(member)).toBeInTheDocument();
    });

    // Check if each role is rendered
    const roles = ['Founder', 'Program Manager', 'Community Manager'];

    roles.forEach((role) => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  });
});
