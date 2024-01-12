export const checkTokenExp = (tokenTime) => {
  const today = new Date();
  const tokenExpDate = new Date(tokenTime * 1000);
  console.log(today, tokenExpDate);
  if (today >= tokenExpDate) {
    console.log(true);
  }
  return today >= tokenExpDate;
};
