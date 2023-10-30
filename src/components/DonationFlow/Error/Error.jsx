import { useNavigate } from 'react-router-dom';
import { Done } from '../../../assets';
import Button from '../../Button';
import Header from '../../Header';
import Text from '../../Text';
import Layout from '../Layout';
import styles from './Error.module.css';
import { HeadText, subText } from './constants';
import { setCurrentStep } from '../../../store/reducers/DonationReducer';
import { useDispatch } from 'react-redux';

export const Error = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const goHome = () => {
    nav('/');
    dispatch(setCurrentStep(1));
  };
  return (
    <Layout>
      <div className={styles.form}>
        <div>
          <div className={styles.done}>
            <img src={Done} alt="done" />
          </div>
          <Header className={styles.headText}>{HeadText}</Header>
          <Text content={subText} className={styles.subText} />
        </div>

        <Button effectAlt label={'Home'} type={'secondary'} className={styles.btn} onClick={goHome} />
      </div>
    </Layout>
  );
};
