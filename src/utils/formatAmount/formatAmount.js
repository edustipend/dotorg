export const formatAsNaira = (amount) => {
  const value = amount.replace(/[^0-9]/g, '');
  return Number(value).toLocaleString('en-NG');
};
