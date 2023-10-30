import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';
import Text from '../../Text';
import Layout from '../Layout';
import { HeadText, subText } from './constants';

import styles from './DonationStep1.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { next, setCompany, setEmail, setName, setPhone } from '../../../store/reducers/DonationReducer';
import { checkEmail } from '../../../utils/EmailChecker/emailChecker';
import { phoneValidator } from '../../../utils/phoneValidator/phoneValidator';
import { LeftArrow } from '../../../assets';
import { useNavigate } from 'react-router-dom';

export const DonationStep1 = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { name, email, phone, company } = useSelector((state) => state.donation);

  const isValid = name?.length > 3 && checkEmail(email) && phoneValidator(phone);

  return (
    <Layout>
      <div className={styles.form}>
        <div className={styles.backBtnContainer}>
          <button className={styles.backBtn} onClick={() => nav('/')}>
            <img src={LeftArrow} alt="back" />
            <span>Back</span>
          </button>
        </div>
        <div>
          <Header className={styles.headText}>{HeadText}</Header>
          <Text content={subText} className={styles.subText} />
        </div>
        <Input
          label="First name and last name"
          placeholder="First name and last name"
          type="text"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <Input
          label="Email Address"
          placeholder="Enter Email Address"
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <Input label="Phone Number" placeholder="Enter  Phone number" type="tel" value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} />
        <Input
          label="Company Name (if applicable)"
          placeholder="Enter company name"
          value={company}
          onChange={(e) => dispatch(setCompany(e.target.value))}
          required={false}
        />
        <Button effectAlt label={'Continue'} type={'secondary'} disabled={!isValid} className={styles.btn} onClick={() => dispatch(next())} />
      </div>
    </Layout>
  );
};
