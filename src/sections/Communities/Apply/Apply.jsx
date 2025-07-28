import React from 'react';
import styles from './Apply.module.css';
import Container from '../../../components/Container';
import { applyCommunity } from '../../../assets';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { constant } from './constant';
import { Link } from 'react-router-dom';
import { content } from '../Hero/constants';

const Apply = () => {
  return (
    <section className={styles.main}>
      <Container>
        <section className={styles.content}>
          <section className={styles.writeUp}>
            <Header size="medium" className={styles.header}>
              {constant.header}
            </Header>
            <Text content={constant.text} className={styles.text} />
            <Link to={content.linkUrl} target={content.linkTarget}>
              <Button type="secondary" label={constant.btnLabel} />
            </Link>
          </section>
          <section className={styles.imgContainer}>
            <img src={applyCommunity} alt="apply" className={styles.img} />
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Apply;
