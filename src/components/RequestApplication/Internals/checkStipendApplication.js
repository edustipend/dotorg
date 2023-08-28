//this helper function checkes if the values of each form field has a length greater than n

//the minmum length can be increased if need be
const MIN_FORM_DATA_LENGTH = 4;

export const isApplicationFilled = (field1, field2, field3, field4) => {
  const formFields = { field1, field2, field3, field4 };
  const check = Object.keys(formFields).every((item) => {
    return formFields[item].length > MIN_FORM_DATA_LENGTH;
  });
  if (check) return true;
  return false;
};
