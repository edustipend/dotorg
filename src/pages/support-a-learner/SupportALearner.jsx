import React from 'react';
import styles from './SupportALearner.module.css';
import TestimonialSection from '../../sections/SupportALearner/Testimonials/TestimonialSection';

export const SupportALearner = () => {
  return (
    <div className={styles.supportalearnercontainer}>
      <TestimonialSection />
    </div>
  );
};
