import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionModal.module.css';
import { failed_tran, success, close } from '../../../../assets';
import Button from '../../../../components/Button';
import { constants } from './constants';
import { defaultShare, twitterShare, instagramShare } from '../sharePosts';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../../components/IconButton';

export const TransactionModal = ({ error, setDisplayModal, message, title }) => {
  const [shareUI, setShareUI] = useState(false);
  const nav = useNavigate();

  const handleShare = (intent) => {
    if (intent === 'LinkedIn' || intent === 'Facebook') {
      defaultShare(intent);
    } else if (intent === 'Twitter') {
      twitterShare();
    } else {
      instagramShare();
    }
  };

  const closeModal = (
    <IconButton dataTest={constants.ICON_BUTTON} onClick={() => setDisplayModal((prev) => !prev)} className={styles.closeBtn}>
      <img src={close} alt={constants.close} className={`${styles.closeIcn}`} />
    </IconButton>
  );

  // render the error modal UI if error
  if (error) {
    return (
      <main className={styles.main}>
        <section className={styles.contentContainer}>
          {closeModal}
          <section className={styles.content}>
            <div className={styles.imgContainer}>
              <img src={failed_tran} alt={constants.failed} className={styles.img} />
            </div>
            <div className={styles.textContent}>
              <p className={styles.title}>{title}</p>
              <p className={styles.message}>{message}</p>
            </div>
            <div className={styles.btnContainer}>
              <Button
                onClick={() => setDisplayModal((prev) => !prev)}
                label={constants.cancel}
                type={constants.plain}
                effectClass={styles.btn}
                className={styles.btn2}
              />
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
      {closeModal}
      <section className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={success} alt={constants.success} className={styles.img} />
        </div>
        <div className={styles.textContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.message}>{message}</p>
        </div>
        <div className={styles.btnContainer}>
          <Button
            label={constants.recent}
            type={constants.plain}
            effectClass={styles.btn}
            onClick={() => {
              setDisplayModal((prev) => !prev);
              nav('/support-a-learner');
            }}
            className={styles.btn2}
          />
          <Button
            label={constants.Share_on_social_media}
            type={constants.secondary}
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
            <IconButton onClick={() => setDisplayModal((prev) => !prev)} className={styles.closeBtn}>
              <img src={close} alt={constants.close} className={`${styles.closeIcn}`} />
            </IconButton>
          </div>
          <div className={styles.handle}>
            {constants.socials.map((itm) => {
              return (
                <div key={itm.id} onClick={() => handleShare(itm.media)} className={styles.media}>
                  <div className={styles.mediaImgContainer}>
                    <img src={itm.img} alt={constants.media} className={styles.mediaImg} />
                  </div>
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
  error: PropTypes.bool,
  message: PropTypes.string,
  setDisplayModal: PropTypes.func,
  title: PropTypes.string
};

TransactionModal.defaultProps = {
  error: false,
  message: '',
  setDisplayModal: () => {},
  title: ''
};
