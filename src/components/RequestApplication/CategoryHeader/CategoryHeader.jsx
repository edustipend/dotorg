import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';
import styles from './CategoryHeader.module.css';
import { supportType, constant } from '../Internals/constants';
const { SUBTITLE, TEXT } = constant;

export const CategoryHeader = ({ header, category, support }) => {
  const Support = supportType(category, support);
  return (
    <section className={styles.main}>
      <div className={styles.topSection}>
        <Header subheader className={styles.subtitle}>
          {SUBTITLE}
        </Header>
        <Header className={styles.title}>{header}</Header>
      </div>
      <div className={styles.bottomSection}>
        <span className={styles.support}>{Support}</span>
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
