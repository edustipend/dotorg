import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionModal.module.scss';
import { failed_tran, success, share, close } from '../../../../assets';
import Button from '../../../../components/Button';
import { constants } from './constants';
import { defaultShare, twitterShare, instagramShare } from '../sharePosts';
import { useNavigate } from 'react-router-dom';

export const TransactionModal = ({ error, handleTransactionModal, message, title }) => {
  const [shareUI, setShareUI] = useState(false);
  const nav = useNavigate();
  console.log(setShareUI);

  const handleShare = (intent) => {
    if (intent === 'LinkedIn' || intent === 'Facebook') {
      defaultShare(intent);
    } else if (intent === 'Twitter') {
      twitterShare();
    } else {
      instagramShare();
    }
  };

  // render the error modal UI if error
  if (error) {
    return (
      <main className={styles.main}>
        <section className={styles.contentContainer}>
          <section className={styles.content}>
            <img src={failed_tran} alt="failed" className={styles.img} />
            <div className={styles.textContent}>
              <p className={styles.title}>{title}</p>
              <p className={styles.message}>{message}</p>
            </div>
            <div className={styles.btnContainer}>
              <Button label="Cancel" type="plain" effectClass={styles.btn} className={styles.btn2} />
              <Button label="Try again" type="secondary" effectClass={styles.btn} className={styles.btn2} />
            </div>
          </section>
        </section>
      </main>
    );
  }

  /**
   * render the success modal UI if !error
   * repaint the UI if the share button is clicked
   */
  let content = (
    <section className={styles.contentContainer}>
      <section className={styles.content}>
        <img src={success} alt="success" className={styles.img} />
        <div className={styles.textContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.message}>{message}</p>
        </div>
        <div className={styles.btnContainer}>
          <Button label="Home" type="secondary" effectClass={styles.btn} onClick={() => nav('/support-a-learner')} className={styles.btn2} />
          <Button
            iconPosition="right"
            icon={share}
            label="Share on social media"
            type="plain"
            onClick={() => setShareUI(true)}
            effectClass={styles.btn}
            className={`${styles.btn2} ${styles.btn2Alt}`}
          />
        </div>
      </section>
    </section>
  );

  if (shareUI) {
    content = (
      <section className={styles.contentContainer}>
        <div className={styles.shareContent}>
          <div className={styles.heading}>
            <p className={styles.share}>{constants.share}</p>
            <img src={close} alt="close" onClick={handleTransactionModal} className={styles.closeIcn} />
          </div>
          <div className={styles.handle}>
            {constants.socials.map((itm) => {
              return (
                <div key={itm.id} onClick={() => handleShare(itm.media)} className={styles.media}>
                  <img src={itm.img} alt="media" className={styles.mediaImg} />
                  <p className={styles.name}>{itm.media}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.text}>
            <p className={styles.mediaText}>{constants.mediaText}</p>
            <p className={styles.mediaLink}>{constants.mediaLink}</p>
          </div>
        </div>
      </section>
    );
  }
  return <main className={styles.main}>{content}</main>;
};

TransactionModal.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
  handleTransactionModal: PropTypes.func,
  title: PropTypes.string
};

TransactionModal.defaultProps = {
  error: '',
  message: '',
  handleTransactionModal: () => {},
  title: ''
};
