import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import { content } from './Internals/constants';
import { TestId } from './Internals/constants';
import ContentContainer from '../ContentContainer';
import Button from '../../Button';
import Select from '../../Select';
import Quote from '../../Quote';
import styles from './Step1Application.module.css';
import { RightArrow, BackArrow } from '../../../assets';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { progress, category } from '../../../store/reducers/ApplicationReducer';
const { HEADING, OPTIONS, LABEL, QUOTE } = content;
const { COMPONENT_ID, HEADER_ID } = TestId;

export const Step1Application = () => {
  const dispatch = useDispatch();
  const { stipendCategory, newApplication } = useSelector((state) => state.application);
  const { userId } = useSelector((state) => state.user);

  const nav = useNavigate();
  //scroll to the top on step mount
  ScrollOnMount();

  //enable the continue button if a stipendCategory has been selected
  const isTrue = stipendCategory.length > 0;
  const handleNav = () => {
    return newApplication || userId ? '/dashboard' : '/request';
  };
  return (
    <div data-testid={COMPONENT_ID}>
      <ContentContainer>
        <section className={styles.step1}>
          <Header size={'small'} className={styles.heading} dataTest={HEADER_ID}>
            {HEADING}
          </Header>
          <div className={styles.selectCategory}>
            <Select value={stipendCategory} label={LABEL} options={OPTIONS} dispatchType={category} className={styles.select} />
            <div className={styles.buttons}>
              <Button
                effectAlt
                label={'Back'}
                icon={BackArrow}
                iconPosition={'back'}
                type={'plain'}
                onClick={() => nav(handleNav())}
                className={styles.btn}
              />

              <Button
                effectAlt
                label={'Continue'}
                icon={RightArrow}
                type={'secondary'}
                disabled={isTrue ? false : true}
                onClick={() => dispatch(progress())}
                className={styles.btn}
              />
            </div>
          </div>
        </section>
      </ContentContainer>
      <section className={styles.quoteSection}>
        <Quote content={QUOTE} className={styles.quote} />
      </section>
    </div>
  );
};
