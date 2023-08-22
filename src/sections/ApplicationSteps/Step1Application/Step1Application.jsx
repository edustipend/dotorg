import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { content } from './Internals/constants';
import { TESTIDS } from './Internals/constants';
import ContentContainer from '../Internals/ContentContainer';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Quote from '../../../components/Quote';
import styles from './Step1Application.module.css';
import { RightArrow, BackArrow } from '../../../assets';

const { HEADING, OPTIONS, LABEL, QUOTE } = content
const { COMPONENT_ID, HEADER_ID } = TESTIDS

export const Step1Application = ({ setActiveStep }) => {
  const nav = useNavigate()

  const handleNextStep = () => {
    setActiveStep((pre) => pre + 1)
  }

  return (
    <div data-testid={COMPONENT_ID}>
      <ContentContainer>
        <section className={styles.step1}>
          <Header size={'small'} className={styles.heading} dataTest={HEADER_ID}>
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
      <section className={styles.quoteSection}>
        <Quote content={QUOTE} className={styles.quote} />
      </section>
    </div>
  );
};

Step1Application.propTypes = {
  setActiveStep: PropTypes.func
}

Step1Application.defaultProps = {
  setActiveStep: () => { }
}