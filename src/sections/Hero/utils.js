import { stipends, StipendCategory } from './constants';

export const getCurrentStipend = (currentStipend) => {
  return stipends[currentStipend] === StipendCategory.LAPTOP ? 'a' : 'some';
};
