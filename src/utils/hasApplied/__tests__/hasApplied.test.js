import { hasApplied } from '../hasApplied';

describe('hasApplied', () => {
  it('should return true if the latest application is in the current month', () => {
    // Mock data for application history
    const mockAppHistory = [
      {
        createdAt: new Date().toISOString()
      }
    ];

    const result = hasApplied(mockAppHistory);

    expect(result).toBe(true);
  });

  it('should return false if there is no latest application', () => {
    const mockAppHistory = [];

    const result = hasApplied(mockAppHistory);

    expect(result).toBe(false);
  });

  it('should return false if the latest application is not in the current month', () => {
    const mockAppHistory = [
      {
        createdAt: new Date('2023-12-15').toISOString() // Date in a previous month
      }
    ];

    const result = hasApplied(mockAppHistory);

    expect(result).toBe(false);
  });
});
