import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import { content } from './Internals/constants';
import { TestId } from './Internals/constants';
import ContentContainer from '../Internals/ContentContainer';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Quote from '../../../components/Quote';
import styles from './Step1Application.module.css';
import { RightArrow, BackArrow } from '../../../assets';
import { progress, category } from '../../../redux/RequestApplication/RequestApplication'
const { HEADING, OPTIONS, LABEL, QUOTE } = content
const { COMPONENT_ID, HEADER_ID } = TestId

export const Step1Application = () => {
  const dispatch = useDispatch()
  const { stipendCategory } = useSelector(state => state.application)
  const nav = useNavigate()

  return (
    <div data-testid={COMPONENT_ID}>
      <ContentContainer>
        <section className={styles.step1}>
          <Header size={'small'} className={styles.heading} dataTest={HEADER_ID}>
            {HEADING}
          </Header>
          <div className={styles.selectCategory}>
            <Select
              value={stipendCategory}
              label={LABEL}
              options={OPTIONS}
              dispatchType={category}
              className={styles.select}
            />
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
                onClick={() => dispatch(progress())}
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