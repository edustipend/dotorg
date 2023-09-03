import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/Header';
import styles from './CategoryHeader.module.css';
import { constant } from '../../constants';
const { SUBTITLE, TEXT } = constant;

export const CategoryHeader = ({ header, category, support }) => {
  return (
    <section className={styles.main}>
      <div className={styles.topSection}>
        <Header subheader className={styles.subtitle}>
          {SUBTITLE}
        </Header>
        <Header className={styles.title}>{header}</Header>
      </div>
      <div className={styles.bottomSection}>
        <span className={styles.support}>{support}</span>
        <p className={styles.text}>{TEXT}</p>
      </div>
    </section>
  );
};

CategoryHeader.propTypes = {
  category: PropTypes.string,
  header: PropTypes.string,
  support: PropTypes.string
};

CategoryHeader.defaultProps = {
  category: 'Laptop',
  header: 'Laptop Stipend',
  support: 'some text'
};
