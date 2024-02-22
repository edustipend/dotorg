import { colors } from './constants';

const getBackgroundColor = (index) => {
  return colors[index % colors.length];
};

export const styleNote = (index) => {
  const style =
    index % 2 === 0
      ? { transform: 'skew(-10deg, 10deg)', background: getBackgroundColor(index) }
      : { transform: 'skew(10deg, -10deg)', background: getBackgroundColor(index) };
  return style;
};
