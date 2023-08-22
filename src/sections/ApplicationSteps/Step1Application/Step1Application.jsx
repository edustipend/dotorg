import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { content } from './Internals/constants';
import ContentContainer from '../Internals/ContentContainer';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Quote from '../../../components/Quote';
import styles from './Step1Application.module.css';
import { RightArrow, BackArrow } from '../../../assets';

const { HEADING, OPTIONS, LABEL, QUOTE } = content

export const Step1Application = ({ setActiveStep }) => {
  const nav = useNavigate()

  const handleNextStep = () => {
    setActiveStep((pre) => pre + 1)
  }

  return (
    <>
      <ContentContainer>
        <section className={styles.step1}>
          <Header size={'small'} className={styles.heading}>
            {HEADING}
          </Header>
          <div className={styles.selectCategory}>
            <Select label={LABEL} options={OPTIONS} className={styles.select} />
            <div className={styles.buttons}>
              <Button
                effectAlt
                label={'Back'}
                icon={BackArrow}
                iconPosition={'back'}
                type={'plain'}
                onClick={() => nav(-1)}
                className={styles.btn} />
              <Button
                effectAlt
                label={'Continue'}
                icon={RightArrow}
                type={'secondary'}
                onClick={handleNextStep}
                className={styles.btn}
              />
            </div>
          </div>
        </section>
      </ContentContainer >
      <Quote content={QUOTE} className={styles.quote} />
    </>
  );
};

Step1Application.propTypes = {
  setActiveStep: PropTypes.func
}

Step1Application.defaultProps = {
  setActiveStep: () => { }
}