import Header from '../../components/Header';
import styles from './Testimonials.module.css';
import { TestConstants } from './internals/testimonialsData';
import { cardData } from './internals/card/cardData';
import frame from '../../assets/arrow_frame.png';
import Carousel from '../../components/Carousel/Carousel';
// import Button from '../../components/Button';

export const Testimonials = () => {
  const { componentTestId } = TestConstants;
  return (
    <main data-testid={componentTestId} className={styles.main}>
      <div className={styles.frame}>
        <img src={frame} alt="frame" />
      </div>
      <section className={styles.testimonialContent}>
        <section className={styles.section}>
          <Header className="v2-section-header" color="primary" size="medium">
            Testimonials
          </Header>
          <div className={styles.headerContainer}>
            <Header className={`v2-section-subheader ${styles.subTitle}`} color="primary" size="small" subheader>
              Hear from our ambassadors and beneficiaries
            </Header>
          </div>
        </section>
        <Carousel cardData={cardData} />
        {/* <div className={styles.ctaButtonContainer}>
          <Button size="large" label="Read more" type="primary" />
        </div> */}
      </section>
    </main>
  );
};
