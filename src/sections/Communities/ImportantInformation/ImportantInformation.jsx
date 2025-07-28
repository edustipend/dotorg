import styles from './ImportantInfromation.module.css';
import Container from '../../../components/Container';
import { Header } from '../../../components/Header/Header';

import { importantInfo } from './constant';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { routesConstant } from '../../../routesConstant';

const ImportantInformation = () => {
  return (
    <div className={styles.bg}>
      <Container>
        <div className={styles.content}>
          <Header size="large" color="neutral" className={styles.title}>
            {importantInfo.title}
          </Header>
          <p className={styles.text}>{importantInfo.text}</p>
          <div className={styles.buttonContainer}>
            <Link to={routesConstant.TERMS}>
              <Button className={styles.infoButton} type="secondary" label="Read Terms and Conditions" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImportantInformation;
