export const checkTokenExp = (tokenTime) => {
  const today = new Date();
  const tokenExpDate = new Date(tokenTime * 1000);
  return today >= tokenExpDate;
};
