import React from 'react';
import styles from './Supports.module.css';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { NavHashLink } from 'react-router-hash-link';
import Button from '../../../components/Button';

const Supports = () => {
  const amountRaised = 2400000;
  const maxValue = 5400000;

  const progressPercentage = (amountRaised / maxValue) * 100;

  const innerGradientColor = `conic-gradient(#5801ff 0deg ${progressPercentage}%, #fff ${progressPercentage}deg 360deg)`;

  const innerCircleStyle = {
    backgroundImage: innerGradientColor
  };

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftwrap}>
            <div className={styles.headerWrap}>
              <Header size={'large'}>Support a Learner</Header>
              <div className={styles.line}></div>
              <h2 className={styles.about}>About this project</h2>
              <Text
                content={'Over the past year, Edustipend has empowered over 500 Nigerians to pursue their aspirations by providing learning stipends'}
              />

              <Text
                content={
                  'Our stipends encompass essential resources such as laptops, course vouchers, and data subscriptions, benefiting an average of 37 young Nigerians monthly across all 36 states of Nigeria.'
                }
              />

              <Text
                content={
                  'The impact of our support has been remarkable, manifesting in the form of newfound employment opportunities, accelerated skill development, and the establishment of sustainable businesses. We are committed to sustaining this positive change and invite your collaboration in achieving this goal.'
                }
              />

              <Text
                content={
                  'In pursuit of our mission, we aim to raise N5.4 million, which will facilitate the provision of stipends for the coming nine months. These funds will enable us to award five laptops, 27 Data subscriptions, and a Course/School fees stipend to 37 young persons.'
                }
              />

              <Text
                content={
                  'We invite you to join us on this mission of empowering our young talents to achieve their dreams by removing the barriers to their learning. You can take action by donating, and sharing with your network as well.'
                }
              />
            </div>
          </div>
          <div className={styles.rightwrap}>
            <p className={styles.goal}>
              GOAL: <span className={styles.target}>₦5,400,000</span>
            </p>
            <div className={styles.progresswrap}>
              <div className={styles.outer}>
                <div className={styles.inner} style={innerCircleStyle}>
                  ₦{amountRaised.toLocaleString()}
                  <p className={styles.raised}>raised</p>
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
            <Button label={'Donate Now'} size={'medium'} type={'primary'} />
          </NavHashLink>
        </div>
      </Container>
    </div>
  );
};

export default Supports;
