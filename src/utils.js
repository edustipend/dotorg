export const isApplicationWindowClosed = () => {
  //TODO: Add logic for checking if window is open
  return true;
};

export const hasUserApplied = (applicationHistory) => {
  const currentDate = new Date();

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);
  const eighthDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 9);

  // Filter the application history to only include applications within the specified range
  const recentApplication = applicationHistory.filter((application) => {
    const applicationDate = new Date(application.createdAt);
    return applicationDate >= firstDayOfMonth && applicationDate <= eighthDayOfMonth;
  });

  // Return true if there is any application within the range, else false
  return recentApplication.length > 0;
};
