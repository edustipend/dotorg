export const getInitials = (name) => {
  const names = name?.split(' ');
  const inits = names.map((name) => name.charAt(0));

  return inits.join('');
};
