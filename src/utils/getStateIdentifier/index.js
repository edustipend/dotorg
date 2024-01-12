const STATE_OPTION = [
  { label: 'Abia', value: 'AB' },
  { label: 'Adamawa', value: 'AD' },
  { label: 'Akwa Ibom', value: 'AK' },
  { label: 'Anambra', value: 'AN' },
  { label: 'Bauchi', value: 'BA' },
  { label: 'Bayelsa', value: 'BY' },
  { label: 'Benue', value: 'BE' },
  { label: 'Borno', value: 'BO' },
  { label: 'Cross River', value: 'CR' },
  { label: 'Delta', value: 'DE' },
  { label: 'Ebonyi', value: 'EB' },
  { label: 'Edo', value: 'ED' },
  { label: 'Ekiti', value: 'EK' },
  { label: 'Enugu', value: 'EN' },
  { label: 'Gombe', value: 'GO' },
  { label: 'Imo', value: 'IM' },
  { label: 'Jigawa', value: 'JI' },
  { label: 'Kaduna', value: 'KA' },
  { label: 'Kano', value: 'KN' },
  { label: 'Katsina', value: 'KT' },
  { label: 'Kebbi', value: 'KB' },
  { label: 'Kogi', value: 'KO' },
  { label: 'Kwara', value: 'KW' },
  { label: 'Lagos', value: 'LA' },
  { label: 'Nassarawa', value: 'NA' },
  { label: 'Niger', value: 'NI' },
  { label: 'Ogun', value: 'OG' },
  { label: 'Ondo', value: 'ON' },
  { label: 'Osun', value: 'OS' },
  { label: 'Oyo', value: 'OY' },
  { label: 'Plateau', value: 'PL' },
  { label: 'Rivers', value: 'RI' },
  { label: 'Sokoto', value: 'SO' },
  { label: 'Taraba', value: 'TA' },
  { label: 'Yobe', value: 'YO' },
  { label: 'Zamfara', value: 'ZA' }
];

export const getStateIdentifier = (stateLabel) => {
  const stateOption = STATE_OPTION.find((state) => state.label === stateLabel);

  return stateOption.value;
};
