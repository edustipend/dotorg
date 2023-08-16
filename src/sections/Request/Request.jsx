import React, { useContext } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import rocket from '../../assets/rocket emoji 3.svg';
import styles from './Request.module.css';
import clock from '../../assets/clock.png';
import blobLeft from '../../assets/blob-left.png';
import blobRight from '../../assets/blob-right.png';
import { ButtonLabelCopy, TestId, REQUEST_SECTION_HEADER } from './constants';
import Header from '../../components/Header';
import { isApplicationWindowClosed } from '../../utils';
import { ModalContext } from '../../context/ModalContext';

export const Request = () => {
  const isWindowClosed = isApplicationWindowClosed();
  const { handleNotifyModal } = useContext(ModalContext);

  //function to display the modal if the window is closed
  const handleOnclick = () => {
    if (isWindowClosed) {
      handleNotifyModal();
    }
  };

  return (
    <main data-testid={TestId.REQUEST_SECTION} className={styles.main}>
      <Container>
        <div className={styles.requestContent}>
          <Header dataTest={TestId.REQUEST_SECTION_HEADER} className={` ${styles.title}`}>
            {REQUEST_SECTION_HEADER}
          </Header>
          <Button
            label={isWindowClosed ? ButtonLabelCopy.WINDOW_CLOSED : ButtonLabelCopy.WINDOW_OPEN}
            type="secondary"
            size="large"
            onClick={() => handleOnclick()}
          />
          <img src={rocket} alt="rocket_emoji" className={styles.rocket} />
        </div>
      </Container>
      <div>
        <img src={clock} alt="clock" className={styles.clockImg} />
      </div>
      <img src={blobLeft} alt="blobLeft" className={`${styles.blob} ${styles.blobLeft}`} />
      <img src={blobRight} alt="blobRight" className={`${styles.blob} ${styles.blobRight}`} />
    </main>
  );
};
