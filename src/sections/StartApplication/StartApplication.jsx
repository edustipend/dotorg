import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import styles from './StartApplication.module.css';
import { TestId } from './constatnts';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { Book, Hero3, ArrowDown, RightArrow } from '../../assets/index';
import { email } from '../../redux/ApplicationReducer/ApplicationRuducer';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';

export const StartApplication = () => {
  const state = useSelector((state) => state.application);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const nav = useNavigate();

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

  //enable the button if the email is valid
  const isTrue = checkEmail(state.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    nav('/application');
  };
  return (
    <div className={styles.container} data-testid={TestId.DATA_TEST}>
      <Container alternate>
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
              <Input
                value={state.email}
                label={'Email Address'}
                placeholder={'Enter your email address'}
                dispatchType={email}
                className={styles.Input}
              />
            </div>
            <div className={styles.btnContainer}>
              <Button
                dataTest={TestId.BTN_ID}
                type={'secondary'}
                icon={RightArrow}
                iconPosition={'front'}
                effectAlt
                disabled={isTrue ? false : true}
                label={TestId.BTN_CONTENT}
                className={styles.btn}
                onClick={handleSubmit}
              />
            </div>
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
      </Container>
    </div>
  );
};
