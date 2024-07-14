import { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../utils/numberFormatter/formatMoney';

const laptop = 400000,
  course = 25000,
  data = 10000;
const constant = {
  invalidAmount: "Amount can't be lower than ₦1,000"
};

const useDonationPrompt = (amount) => {
  const timeoutRef = useRef(null);
  const [currentText, setCurrentText] = useState('');
  const [nextText, setNextText] = useState('');
  const [swapText, setSwapText] = useState(false);

  const handleUnits = (amount, stipendType) => {
    return Math.floor(amount / stipendType);
  };

  const handleNextText = useCallback((amount) => {
    const nextAmount = amount * 2;
    if (nextAmount >= laptop) {
      return setNextText(
        `${formatMoney(nextAmount)} can help get ${handleUnits(amount, laptop) > 1 ? 'laptops' : 'a laptop'} 
        for ${handleUnits(nextAmount, laptop)} ${handleUnits(nextAmount, laptop) > 1 ? 'learners' : 'learner'} 
        OR can pay for a course online for ${handleUnits(nextAmount, course)} ${handleUnits(nextAmount, course) > 1 ? 'learners' : 'learner'} 
        OR can help get data subscription for ${handleUnits(nextAmount, data)} ${handleUnits(nextAmount, data) > 1 ? 'learners' : 'learner'}`
      );
    }
    if (amount >= course) {
      return setNextText(
        `${formatMoney(nextAmount)} is a great start and can pay for a course online 
        for ${handleUnits(nextAmount, course)} ${handleUnits(nextAmount, course) > 1 ? 'learners' : 'learner'} 
        OR can help get data subscription for ${handleUnits(nextAmount, data)} ${handleUnits(nextAmount, data) > 1 ? 'learners' : 'learner'}`
      );
    }
    if (amount >= data) {
      return setNextText(
        `${formatMoney(nextAmount)} is a great start and can get data subscription 
        for ${handleUnits(nextAmount, data)} ${handleUnits(nextAmount, data) > 1 ? 'learners' : 'learner'}`
      );
    }
    setNextText('');
  }, []);

  useEffect(() => {
    const Amount = Number(amount);
    //next donation is pegged at x2 the current donation (can be reviewed)
    const next = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        handleNextText(Amount);
        setSwapText((prev) => !prev);
      }, 2000);
    };

    const units = (stipendType) => `${handleUnits(amount, stipendType) > 1 ? 'learners' : 'learner'}`;

    if (Amount < 1000) {
      setCurrentText(constant.invalidAmount);
      setNextText('');
    } else if (Amount >= laptop) {
      setCurrentText(
        `${formatMoney(amount)} can help get ${handleUnits(amount, laptop) > 1 ? 'laptops' : 'a laptop'} 
        for ${handleUnits(amount, laptop)} ${units(laptop)} 
        OR can pay for a course online for ${handleUnits(amount, course)} ${units(course)} 
        OR can help get data subscription for ${handleUnits(amount, data)} ${units(data)}`
      );
      setSwapText(false);
      setNextText('');
    } else if (Amount >= course) {
      setCurrentText(
        `${formatMoney(amount)} is a great start and can pay for a course online 
        for ${handleUnits(amount, course)} ${units(course)} 
        OR can help get data subscription for ${handleUnits(amount, data)} ${units(data)}`
      );
      next();
    } else if (Amount >= data) {
      setCurrentText(`${formatMoney(amount)} is a great start and can get data subscription 
      for ${handleUnits(amount, data)} ${units(data)}`);
      setNextText('');
      next();
    } else {
      setCurrentText(`${formatMoney(amount)} is a great start`);
      setNextText('');
    }

    //clean up the timeout to prevent the overwrite of the current value by the outdataed value
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [amount, handleNextText]);

  return { currentText, nextText, swapText, setSwapText };
};

useDonationPrompt.propTypes = {
  amount: PropTypes.number
};

export default useDonationPrompt;
