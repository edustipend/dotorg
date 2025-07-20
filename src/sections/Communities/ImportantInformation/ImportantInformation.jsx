import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ImportantInfromation.module.css';
import Container from '../../../components/Container';
import { Header } from '../../../components/Header/Header';

import { importantInfo } from './constant';
import { Button } from '../../../components/Button/Button';

const ImportantInformation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../../../pages/legal/terms-condition/Terms');
  };
  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.content}>
          <Header size="large" color="neutral" className={styles.title}>
            {importantInfo.title}
          </Header>
          <p className={styles.text}>{importantInfo.text}</p>
          <div className={styles.buttonContainer}>
            <Button className={styles.infoButton} type="secondary" label="Read Terms and Conditions" onClick={handleClick} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImportantInformation;
