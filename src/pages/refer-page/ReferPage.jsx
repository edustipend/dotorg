import Container from '../../components/Container';
import styles from './ReferPage.module.css';
import donationNetworkSVG from '../../assets/refer-frame.svg';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button';
import referPageTexts from './ReferPageText';

function ReferPage() {
  return (
    <main className={styles.referPage}>
      <Container>
        <div className={styles.donationNetwork}>
          <img src={donationNetworkSVG} alt="Donation network frame" />
        </div>

        <div className={styles.referFormSection}>
          <div className={styles.referHeader}>
            <Header size="medium">{referPageTexts.referHeader}</Header>
          </div>
          <p className={styles.referParagraph}>{referPageTexts.referParagraph}</p>

          <form action="" className={styles.referForm}>
            <FormInput label="Name" type="text" placeholder="Enter name" />
            <FormInput label="Email" type="email" placeholder="Enter email address" />

            <div className={styles.referFormButton}>
              <Button size="medium" type="secondary" label="Generate Link" />
            </div>

            <p className={styles.referralText}>{referPageTexts.referralText}</p>
            <div className={styles.referralLink}>
              <p>{referPageTexts.referralLink}</p>
              <p className={styles.referralLinkCopy}>{referPageTexts.referralLinkCopy}</p>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}

export default ReferPage;
