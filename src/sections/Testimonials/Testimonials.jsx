import Header from '../../components/Header';
import styles from './Testimonials.module.css'
import { TestConstants } from './testimonialsData';
import { cardData } from './internals/card/cardData';
import Carousel from './internals/carousel/Carousel';
import frame from '../../assets/arrow_frame.png'

export const Testimonials = () => {
  const { componentTestId } = TestConstants
  return (
    <main data-testid={componentTestId} className={styles.main}>
      <div className={styles.frame}>
        <img src={frame} alt="frame" />
      </div>
      <section className={styles.testimonialContent}>
        <section className={styles.section}>
          <Header size="large" text="Testimonials" />
          <div className={styles.sub_header}>
            <Header size="medium" text="HEAR FROM OUR AMBASSADORS AND BENEFICIARIES" subheader />
          </div>
        </section>
        <Carousel cardData={cardData} />
      </section>
    </main>
  )
}