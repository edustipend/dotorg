import Header from '../../components/Header';
import styles from './Testimonials.module.css';
import { TestConstants } from './internals/testimonialsData';
import { cardData } from './internals/card/cardData';
import frame from '../../assets/arrow_frame.png';
import Carousel from '../../components/Carousel/Carousel';

<<<<<<< HEAD
export const Testimonials = () => (
  <section>
    <Header size="large" text="Our Beneficiaries so far" />
    <Header size="small" text="Our Beneficiaries" upperCase={true} />
    <Text content="OUR BENEFICIARIES"/>
  </section>
);
=======
export const Testimonials = () => {
  const { componentTestId } = TestConstants;
  return (
    <main data-testid={componentTestId} className={styles.main}>
      <div className={styles.frame}>
        <img src={frame} alt="frame" />
      </div>
      <section className={styles.testimonialContent}>
        <section className={styles.section}>
          <Header size="medium">Testimonials</Header>
          <div className={styles.headerContainer}>
            <div className={styles.sub_header}>
              <Header size="small" subheader>
                Hear from our ambassadors and Beneficiaries
              </Header>
            </div>
          </div>
        </section>
        <Carousel cardData={cardData} />
      </section>
    </main>
  );
};
>>>>>>> 7f0bf8436a5f0f95d5b9ac43614a667558c0ed56
