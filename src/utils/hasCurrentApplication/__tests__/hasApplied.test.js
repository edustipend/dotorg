import { hasCurrentApplication } from '../hasCurrentApplication';

describe('hasCurrentApplication', () => {
  it('should return true if the latest application is in the current month and year', () => {
    // Mock data for application history
    const mockAppHistory = [
      {
        createdAt: new Date().toISOString()
      }
    ];

    const result = hasCurrentApplication(mockAppHistory);

    expect(result).toBe(true);
  });

  it('should return false if there is no latest application', () => {
    const mockAppHistory = [];

    const result = hasCurrentApplication(mockAppHistory);

    expect(result).toBe(false);
  });

  it('should return false if the latest application is not in the current month', () => {
    const mockAppHistory = [
      {
        createdAt: new Date('2023-12-15').toISOString() // Date in a previous month
      }
    ];

    const result = hasCurrentApplication(mockAppHistory);

    expect(result).toBe(false);
  });

  it('should return false if the latest application is in the same month, but different year', () => {
    const newDate = new Date().setFullYear(2022);

    const mockAppHistory = [
      {
        createdAt: new Date(newDate).toISOString()
      }
    ];

    const result = hasCurrentApplication(mockAppHistory);

    expect(result).toBe(false);
  });
});
