import { render, screen } from '@testing-library/react';
import { SurveyBox } from '../SurveyBox';
import { TestId } from '../constants';

describe('SurveyBox component', () => {
  it('shows the right text', () => {
    render(<SurveyBox />);
    expect(screen.getByTestId(TestId.SURVEY_TITLE_TEST_ID)).toBeInTheDocument();
  });
});
