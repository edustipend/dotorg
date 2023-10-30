// import CashDonationStep1 from '../../components/DonationFlow/CashDonation/Step1';
// import CashDonationStep2 from '../../components/DonationFlow/CashDonation/Step2';
import DonationFlow from '../../components/DonationFlow';
// import CashDonationStep3 from '../../components/DonationFlow/CashDonation/Step3';
// import CashDonationStep4 from '../../components/DonationFlow/CashDonation/Step4';
// import LaptopDonationStep3 from '../../components/DonationFlow/LaptopDonation/Step3';
// import LaptopDonationStep4 from '../../components/DonationFlow/LaptopDonation/Step4/';
import styles from './Donate.module.css';

const Donate = () => {
  return (
    <main className={styles.container}>
      <DonationFlow />
    </main>
  );
};

export default Donate;
