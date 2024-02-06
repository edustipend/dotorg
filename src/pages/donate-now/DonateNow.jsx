import React, { useState } from 'react';
import styles from './DonateNow.module.css'
import { aisha, quoteLeft, quoteRight } from '../../assets';
import { constants } from './constants';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Button from '../../components/Button';

export const DonateNow = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.background}>
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.left}>
            <img src={aisha} alt="aisha" className={styles.aisha} />
            <div className={styles.quote}>
              <div className={styles.message}>
                <p className={styles.aishaQuote}>{constants.aisha}</p>
                <p className={styles.name}>{constants.name}</p>
                <img src={quoteLeft} alt="quote" className={styles.quoteLeft} />
                <img src={quoteRight} alt="quote" className={styles.quoteRight} />
              </div>
            </div>
          </section>
          <section className={styles.right}>
            <section className={styles.formContainer}>
              <div className={styles.heading}>
                <Header className={styles.title}>{constants.title}</Header>
                <Text content={constants.subtitle} className={styles.subtitle} />
              </div>
              <div className={styles.form}>
                <div className={styles.alt}>
                  <Input
                    type="text"
                    disabled={toggle}
                    required={false}
                    label="First name and last name"
                    placeholder="First Name and Last Name"
                    onChange={() => {}}
                    className={toggle && `${styles.fullname}`}
                  />
                  <div className={styles.toggleContainer}>
                    <p className={styles.anon}>{constants.anonymous}</p>
                    <div onClick={() => setToggle((prev) => !prev)} className={toggle ? `${styles.toggle} ${styles.toggleAlt}` : `${styles.toggle}`}>
                      <div className={toggle ? `${styles.ballAlt}` : `${styles.ball}`} />
                    </div>
                  </div>
                </div>
                <Input type="email" label="Email Address" placeholder="Enter Email Address" required={false} />
                {toggle && <Input required={false} label="Company Name (if applicable)" placeholder="Enter company name" />}
                <Input required={false} type="number" label="Phone Number" placeholder="Enter Phone number" />
                <Input required={false} type="number" label="Amount" placeholder="NGN" />
              </div>
              <div className={styles.btnContainer}>
                <Button label={`${'Donate'}`} type="secondary" effectClass={styles.effect} className={styles.btn} />
              </div>
            </section>
            <p className={styles.footnote}>{constants.quote}</p>
          </section>
        </div>
      </main>
    </div>
  );
};
