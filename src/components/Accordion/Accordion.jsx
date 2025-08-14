import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.css';
import Button from '../Button';
import { ArrowDownChev } from '../../assets';

const DEFAULT_ACCORDION_TEST_ID = 'accordion-component';

export const Accordion = ({ title, content, className, dataTest = DEFAULT_ACCORDION_TEST_ID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;

    if (isOpen) {
      el.style.height = el.scrollHeight + 'px';

      const transitionEndHandler = () => {
        el.style.height = 'auto';
        el.removeEventListener('transitionend', transitionEndHandler);
      };
      el.addEventListener('transitionend', transitionEndHandler);
    } else {
      if (el.style.height === 'auto') {
        el.style.height = el.scrollHeight + 'px';
        void el.offsetHeight;
      }
      el.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <div className={`${styles.accordion} ${className || ''} ${isOpen ? styles.open : ''}`} data-testid={dataTest}>
      <div className={styles.header} onClick={toggleAccordion} data-testid={`${dataTest}-header`}>
        <h3 className={styles.question}>{title}</h3>
        <Button type="secondary" size="sm" effectClass={styles.effect} className={styles.button} dataTest={`${dataTest}-toggle-button`}>
          <img src={ArrowDownChev} alt="" className={`${styles.btnIcon} ${isOpen ? styles.rotate : ''}`} />
        </Button>
      </div>
      <div ref={answerRef} className={styles.answerContainer} data-testid={`${dataTest}-answer-container`}>
        <hr className={styles.divider} />
        <div className={styles.answer}>{content}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  dataTest: PropTypes.string
};
