export const formatNumber = (number) => {
  const format = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(number);
  return format;
};
