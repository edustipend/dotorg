export const hasApplied = (appHistory) => {
  const latestApplication = appHistory[0];
  const currentMonth = new Date().getMonth();
  const latestApplicationMonth = new Date(latestApplication?.createdAt).getMonth();
  console.log(currentMonth === latestApplicationMonth);
  return currentMonth === latestApplicationMonth;
};
