import Container from '../../components/Container';
import styles from './ReferPage.module.css';
import donationNetworkSVG from '../../assets/refer-frame.svg';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button';

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
            <FormInput label="Name" type="text" placeholder="Enter name" />
            <FormInput label="Email" type="email" placeholder="Enter email address" />

            <div className={styles.referFormButton}>
              <Button size="medium" type="secondary" label="Generate Link" />
            </div>

            <p className={styles.referralText}>Share your unique referral link</p>
            <div className={styles.referralLink}>
              <p>https/edustipend.com/refer/ezebillions</p>
              <p className={styles.referralLinkCopy}>Copy</p>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}

export default ReferPage;
