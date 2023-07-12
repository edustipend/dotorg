import Header from '../../components/Header';
import Text from '../../components/Text/';
import styles from './Testimonials.module.css'
import { TestConstants } from './internals/testimonialsData';
import { cardData } from './internals/card/cardData';
import Carousel from './internals/carousel/Carousel';

export const Testimonials = () => {
  const { componentTestId } = TestConstants
  return (
    <main data-testid={componentTestId} className={styles.main}>
      <section className={styles.testimonialContent}>
        <section className={styles.section}>
          <Header size="large" text="Our Beneficiaries so far" />
          <Header size="small" text="Our Beneficiaries" upperCase={true} />
          <Text content="OUR BENEFICIARIES" />
        </section>
        <Carousel cardData={cardData} />
      </section>
    </main>
  )
}