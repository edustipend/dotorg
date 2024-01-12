export const checkTokenExp = (tokenTime) => {
  // Unix timestamp
  const timestamp = 1706233429;

  // Create a new Date object using the timestamp
  const today = new Date();
  const tokenExpDate = new Date(timestamp * 1000);
  console.log(today, tokenExpDate);
  if (today >= tokenExpDate) {
    console.log(true);
    //clearLocalStorage
  }
  return today >= tokenExpDate;
};
