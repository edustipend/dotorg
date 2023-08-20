import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import styles from './StartApplication.module.css';
import { TestId } from './constatnts';
import { Book, Hero3, ArrowDown, RightArrow } from '../../assets/index';

export const StartApplication = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const nav = useNavigate()
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
      setShowScrollIndicator(!isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    nav('/request-stipend')
  };
  return (
    <div className={styles.container} data-testid={TestId.DATA_TEST}>
      <div className={styles.top}>
        <Header className={styles.header} data={TestId.HEAD_TEXT}>
          {TestId.HEAD_TEXT}
        </Header>
        <div className={styles.desc}>
          {TestId.DESC.map((p, index) => {
            return <Text key={p} content={p} className={index === 2 ? styles.important : index === TestId.DESC.length - 2 ? styles.close : ''} />;
          })}
        </div>
      </div>
      <div className={styles.bottom}>
        <Text className={styles.textB} content={TestId.PARAGRAPH} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor={TestId.INPUT_ID} className={styles.label}>
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
          <Button
            className={styles.btn}
            dataTest={TestId.BTN_ID}
            disabled={!isValid}
            icon={RightArrow}
            iconPosition={TestId.ICON_FRONT}
            label={TestId.BTN_CONTENT}
            onClick={handleSubmit}
          />
        </form>
      </div>
      <Text className={styles.quotes} content={TestId.QUOTE} />
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
