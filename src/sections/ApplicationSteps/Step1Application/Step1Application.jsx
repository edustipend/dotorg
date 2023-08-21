import React from 'react';
import Header from '../../../components/Header';
import { heading } from './Internals/constants';
import ContentContainer from '../Internals/ContentContainer';
import styles from './Step1Application.module.css'

export const Step1Application = () => {
  return (
    <ContentContainer>
      <section>
        <Header size={'small'} className={styles.heading}>
          {heading}
        </Header>
        <div></div>
      </section>
    </ContentContainer>
  );
};
