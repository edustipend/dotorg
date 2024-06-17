import React, { useCallback, useEffect, useState } from 'react';
import styles from './Supports.module.css';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../../../components/Button';
import {
  AMT_RAISED_TEXT,
  TestId,
  content1,
  content2,
  content3,
  content4,
  content5,
  headText,
  maxValue,
  progressText1,
  progressText2,
  subHeadText
} from './constants';
import { getData } from '../../../services/ApiClient';

const Supports = () => {
  const [displayedAmount, setDisplayedAmount] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [TotalAmountRaised, setTotalAmountRaised] = useState(0);

  const innerStyle = {
    background: `conic-gradient(#5801ff 0deg ${progressPercentage}%, #febd1c33 ${progressPercentage}deg 360deg)`
  };

  const fetchTransactions = useCallback(async () => {
    const response = await getData(`donate/timeline`);
    if (response.status) {
      const AmountRaised = response?.data?.donations.reduce((sum, donation) => sum + donation?.transaction?.amount, 0);
      setTotalAmountRaised(AmountRaised);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  useEffect(() => {
    let amount = 0;
    const interval = setInterval(() => {
      if (amount < TotalAmountRaised) {
        amount += 10000;
        if (amount > TotalAmountRaised) amount = TotalAmountRaised;
        setDisplayedAmount(amount);
        setProgressPercentage((amount / maxValue) * 100);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [TotalAmountRaised]);

  return (
    <div id="how-it-works" className={styles.container} data-testid={TestId.WRAPPER}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftwrap}>
            <div className={styles.headerWrap}>
              <Header size={'large'} dataTest={TestId.HEAD_TEXT}>
                {headText}
              </Header>
              <div className={styles.line}></div>
              <h2 className={styles.about} data-testid={TestId.SUB_HEAD_TEXT}>
                {subHeadText}
              </h2>
              <Text dataTest={TestId.CONTENT1} content={content1} />

              <Text dataTest={TestId.CONTENT2} content={content2} />

              <Text dataTest={TestId.CONTENT3} content={content3} />

              <Text dataTest={TestId.CONTENT4} content={content4} />

              <Text dataTest={TestId.CONTENT5} content={content5} />
            </div>
          </div>
          <div className={styles.rightwrap}>
            <p className={styles.goal} data-testid={TestId.progressText1}>
              {progressText1}{' '}
              <span className={styles.target} data-testid={TestId.progressText2}>
                {progressText2}
              </span>
            </p>
            <div className={styles.progresswrap}>
              <div style={innerStyle} className={styles.outer} data-testid={TestId.OUTER_DIV}>
                <div className={styles.inner} data-testid={TestId.INNER_DIV}>
                  <p className={styles.amtraised} data-testid={TestId.AMT_RAISED}>
                    ₦{displayedAmount.toLocaleString()}
                  </p>
                  <p className={styles.raised} data-testid={TestId.AMT_RAISED_TEXT}>
                    {AMT_RAISED_TEXT}
                  </p>
                </div>
              </div>

              <div className={styles.cta}>
                <NavHashLink
                  to={{
                    pathname: '/support-a-learner/donate'
                  }}>
                  <Button label={'Donate Now'} size={'medium'} type={'primary'} />
                </NavHashLink>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta2}>
          <NavHashLink
            to={{
              pathname: '/support-a-learner/donate'
            }}>
            <Button label={'Donate Now'} size={'large'} type={'secondary'} />
          </NavHashLink>
        </div>
      </Container>
    </div>
  );
};

export default Supports;
