import Container from '../../components/Container';
import styles from './ReferPage.module.css';
import donationNetworkSVG from '../../assets/refer-frame.svg';
import Header from '../../components/Header';

function ReferPage() {
  return (
    <main className={styles.referPage}>
      <Container>
        <div className={styles.donationNetwork}>
          <img src={donationNetworkSVG} alt="Donation network frame" />
        </div>

        <div className={styles.referFormSection}>
          {/* Temporal Test */}
          <div className={styles.referHeader}>
            <Header size="medium">Refer a Friend</Header>
          </div>
          <p className={styles.referParagraph}>Enter your name and email address below to generate a personalized link and share with your friends</p>

          <form action="" className={styles.referForm}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat illo sapiente amet quae suscipit expedita similique, illum sint qui a
            minus consequuntur veritatis dicta soluta quaerat! Consequatur ratione fuga beatae.
          </form>
        </div>
      </Container>
    </main>
  );
}

export default ReferPage;
