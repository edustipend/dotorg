import Container from '../../../components/Container';
import styles from './Reports.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { TestId, Texts } from './constants';
import { useState, useEffect } from 'react';

const Reports = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    setPdfUrl(`https://drive.google.com/file/d/${Texts.PDF_FIELD}/preview`);
  }, []);

  return (
    <div className={styles.container} data-testid={TestId.WRAPPER} id={TestId.ID}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrap}>
            <Header size={TestId.LARGE} dataTest={TestId.HEAD_TEXT}>
              {Texts.HEADER}
            </Header>
          </div>
          <Text dataTest={TestId.SUB_HEADER} content={Texts.SUB_HEADER} />
        </div>

        <div className={styles.pdfContainer} data-testid={TestId.PDF_CONTAINER}>
          {pdfUrl ? (
            <iframe src={pdfUrl} className={styles.pdfFrame} title={TestId.IFRAME_TITLE} allowFullScreen data-testid={TestId.PDF_FRAME} />
          ) : (
            <div className={styles.pdfLoading}>{TestId.LOADING}</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Reports;
