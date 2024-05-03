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
        <div className={styles.missvis}>
          <div className={styles.mission}>
            <Text color="primary" content="OUR MISSION" />
            <h4>
              To stoke the flames of a learner’s dream and to keep it from dying and build a critical mass of people who are willing to take a chance
              on others
            </h4>
          </div>
          <div className={styles.vision}>
            <Text color="primary" content="OUR VISION" />
            <h4>
              To increase the range of our services to meet the needs of beneficiaries and will build strategic partnerships to allow us expand to
              into other countries in Africa
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
