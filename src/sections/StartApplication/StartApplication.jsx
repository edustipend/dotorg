import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Text from '../../components/Text';
import styles from './StartApplication.module.css';
import { TestId } from './constants';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { Book, Hero3, ArrowDown, RightArrow } from '../../assets/index';
import { Email } from '../../store/reducers/UserDetailsReducer';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';
import toast from 'react-hot-toast';
import { postData } from '../../services/ApiClient';
import { ModalContext } from '../../context/ModalContext';
import { EmailExist } from '../EmailExist/EmailExist';
import Modal from '../../components/Modal';

export const StartApplication = () => {
  const [isLoading, setisLoading] = useState(false);
  const state = useSelector((state) => state.userDetails);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { handleEmailExistModal } = useContext(ModalContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setisLoading(true);

    try {
      const res = await postData('user/check', {
        username: state.email
      });

      if (!res.success) {
        nav('/application');
      }

      if (res.success) {
        handleEmailExistModal();
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setisLoading(false);
    }
  };
  return (
    <>
      <div className={styles.container} data-testid={TestId.DATA_TEST}>
        <Container alternate>
          <div className={styles.top}>
            <Header className={styles.header} dataTest={TestId.HEAD_TEXT}>
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
                  onChange={(e) => dispatch(Email(e.target.value))}
                  className={styles.Input}
                />
              </div>
              <div className={styles.btnContainer}>
                <Button
                  dataTest={TestId.BTN_ID}
                  isLoading={isLoading}
                  type="secondary"
                  icon={RightArrow}
                  iconPosition="front"
                  effectAlt
                  loaderVariant="neutral"
                  loaderSize="small"
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

      <Modal data-testid={TestId.MODAL_TEST}>
        <EmailExist />
      </Modal>
    </>
  );
};
