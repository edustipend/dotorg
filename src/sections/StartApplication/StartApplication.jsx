import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import styles from './StartApplication.module.css';
import { TestId } from './constatnts';

import { Book, Hero3, ArrowDown } from '../../assets/index';

export const StartApplication = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      setShowScrollIndicator(!isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} data-testid={TestId.DATA_TEST}>
      <div className={styles.top}>
        <Header className={styles.header}>{TestId.HEAD_TEXT}</Header>
        <div className={styles.desc}>
          {TestId.DESC.map((p, index) => {
            return <Text key={p} content={p} className={index === TestId.DESC.length - 2 ? styles.salutation : ''} />;
          })}
        </div>
      </div>
      <div className={styles.bottom}>
        <Text className={styles.textB} content={TestId.PARAGRAPH} />
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor={TestId.INPUT_ID}>
              {TestId.INPUT_LABEL} <span className={styles.required}>*</span>
            </label>
            <input
              data-testid={TestId.INPUT_ID}
              id={TestId.INPUT_ID}
              type={TestId.INPUT_NAME}
              name={TestId.INPUT_NAME}
              className={styles.input}
              placeholder={TestId.PLACEHOLDER}
              required
              value={value}
              onInput={(e) => setIsValid(e.target.validity.valid)}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Button dataTest={TestId.BTN_ID} label={TestId.BTN_CONTENT} backgroundColor={TestId.BTN_BG} disabled={!isValid} />
        </form>
      </div>
      <p className={styles.quotes}>{TestId.QUOTE}</p>
      <img className={styles.book} src={Book} alt="book" />
      <img className={styles.student} src={Hero3} alt="student" />
      {showScrollIndicator && (
        <div className={styles.downArrow}>
          <img src={ArrowDown} alt="down" />
        </div>
      )}
    </div>
  );
};
