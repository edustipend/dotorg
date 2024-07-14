import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

export const AnimatedNumber = ({ value, money }) => {
  const p = useSpring({ number: value, from: { number: 0 }, config: { duration: 6000 } });
  return (
    <animated.span>
      {p.number.to((val) =>
        money
          ? new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN',
              maximumFractionDigits: 0
            }).format(Math.floor(val))
          : Math.floor(val)
      )}
    </animated.span>
  );
};

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  money: PropTypes.bool
};
