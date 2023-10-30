export const phoneValidator = (num) => {
  // Define a regular expression pattern for a valid international phone number with an optional plus sign
  const phonePattern = /^(\+\d{1,18}|\d{9,18})$/; // Allows for optional + sign and 9 to 18 digits
  return phonePattern.test(num);
};
