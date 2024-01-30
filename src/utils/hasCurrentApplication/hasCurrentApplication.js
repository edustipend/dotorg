/**
 * Checks if the user has applied for a stipend in the current month and year based on their application history, considering the first or latest application in the array.
 * @param {Array} appHistory - Array of application objects containing application history.
 * @returns {boolean} - True if the user has applied in the current month and year, false otherwise.
 */

export const hasCurrentApplication = (appHistory) => {
  const latestApplication = appHistory[0];
  const currentDate = new Date();
  const latestApplicationDate = new Date(latestApplication?.createdAt);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const latestApplicationMonth = latestApplicationDate.getMonth();
  const latestApplicationYear = latestApplicationDate.getFullYear();

  return currentMonth === latestApplicationMonth && currentYear === latestApplicationYear;
};
