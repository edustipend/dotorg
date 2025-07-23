import PropTypes from 'prop-types';

import Container from '../../../components/Container/';
import { Header } from '../../../components/Header/Header';
import styles from './Eligibility.module.css';

import { cardData, elgibilityCriteria } from './constant';

const CommunityCard = ({ image, title, description }) => (
  <div className={styles.card}>
    <img className={styles.cardImg} src={image} alt={title} />
    <Header size="small" color="neutral" className={styles.cardTitle}>
      {title}
    </Header>
    <p>{description}</p>
  </div>
);

function Eligibility() {
  return (
    <section className={styles.bg}>
      <Container className={styles.container}>
        <article className={styles.contentHeader}>
          <Header size="large" color="neutral" className={styles.header}>
            {elgibilityCriteria.title}
          </Header>
          <p className={styles.contentDescription}>{elgibilityCriteria.description}</p>
        </article>

        <div className={styles.cardGrids}>
          {cardData.map(({ image, title, description }) => (
            <CommunityCard key={title} image={image} title={title} description={description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Eligibility;

CommunityCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
