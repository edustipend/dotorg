import React from 'react';
import styles from './AboutUs.module.css';
import Container from '../../components/Container';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import about from '../../assets/about-img.png';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.leftwrap}>
            <Header color="primary">About Us</Header>
            <Text
              color="primary"
              content="Our story, our mission. Learn about our commitment to bridging the digital divide and Empowering learners worldwide"
              className={styles.desc}
            />
          </div>
          <div className={styles.rightwrap}>
            <img src={about} alt="about-us" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
