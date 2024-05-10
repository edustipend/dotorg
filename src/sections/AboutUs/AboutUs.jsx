import React from 'react';
import styles from './AboutUs.module.css';
import Container from '../../components/Container';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import about from '../../assets/about-img.png';
import { TestId, desc, headText, missionAndVisionData } from './constant';

const AboutUs = () => {
 

  return (
    <div className={styles.container} data-testid={TestId.WRAPPER}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.leftwrap}>
            <Header color="primary" dataTest={TestId.HEAD_TEXT}>
              {headText}
            </Header>
            <Text color="primary" dataTest={TestId.DESC} content={desc} className={styles.desc} />
          </div>
          <div className={styles.rightwrap}>
            <img src={about} alt="about-us" data-testid={TestId.IMAGE} />
          </div>
        </div>

        <div className={styles.missvis}>
          {missionAndVisionData.map((item, index) => (
            <div key={index} className={styles.mission}>
              <Text color="primary" content={item.title} />
              <h4>{item.description}</h4>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
