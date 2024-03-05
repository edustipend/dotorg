import { CheckPreviousApplication } from '../CheckPreviousApplication';

describe('CheckPreviousApplication', () => {
  test('Returns true if application date is in the current month and year', () => {
    const currentDate = new Date();
    const applicationDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 5);
    const application = {
      createdAt: applicationDate.toISOString()
    };
    expect(CheckPreviousApplication(application)).toBe(true);
  });

  test('Returns false if application date is not in the current month and year', () => {
    const currentDate = new Date();
    const applicationDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 5);
    const application = {
      createdAt: applicationDate.toISOString()
    };
    expect(CheckPreviousApplication(application)).toBe(false);
  });

  test('Returns undefined if application date is not provided', () => {
    const application = {};
    expect(CheckPreviousApplication(application)).toBeUndefined();
  });
});
