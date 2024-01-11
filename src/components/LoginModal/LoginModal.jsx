import { useCallback, useEffect, useState } from 'react';
import styles from './LoginModal.module.css';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';
import { CloseAlt, Hand } from '../../assets';
import { constant } from './internals/constants';
import NotifyMe from '../../sections/NotifyMe';
import NotifyModal from '../../sections/NotifyMe/internals/NotifyModal';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';
import { isApplicationWindowClosed } from '../../utils';
import EmailSection from './internals/EmailSection';

const userDetails = {
  email: '',
  password: ''
};


export const LoginModal = () => {
  const applicationClosedState = isApplicationWindowClosed();
  const { handleLoginModal } = useContext(ModalContext);
  const [loading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [details, setDetails] = useState(userDetails);
  const { email, password } = details;

  const disableButton = useCallback(() => {
    const isValid = checkEmail(email);
    if (isValid) {
      setDisabled((prev) => ({ ...prev, continueBtn: false }));
    }
  }, [email]);

  useEffect(() => {
    disableButton();
  }, [disableButton]);


  return (
    <div className="modal_modal modal_content">
      <div className="animate_modal_modal">
        <div className={styles.loginContent}>
          <section className={styles.ModalContainer}>
            <div className={styles.close}>
              <img src={CloseAlt} alt="close" onClick={() => handleLoginModal((prev) => !prev)} />
            </div>
            <div className={styles.header}>
              <img src={Hand} alt="hand" className={styles.hand} />
              <div className={styles.headerText}>
                <p className={styles.head}>{constant.HEADER}</p>

              </div>
            </div>
            <EmailSection
              applicationClosedState={applicationClosedState}
              constant={constant}
              email={email}
              password={password}
              loading={loading}
              disabled={disabled}
              setDetails={setDetails}
            />
          </section>
        </div>
      </div>
      <NotifyModal>
        <NotifyMe />
      </NotifyModal>
    </div>
  );
};
