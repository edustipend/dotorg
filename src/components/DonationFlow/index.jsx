import React from 'react';
import { useSelector } from 'react-redux';
import DonationStep1 from './Step1';
import DonationStep2 from './Step2';
import { donation } from './Step2/constants';
import { CashDonationStep3 } from './CashDonation/Step3/CashDonationStep3';
import LaptopDonationStep3 from './LaptopDonation/Step3';
import { LaptopDonationStep4 } from './LaptopDonation/Step4/LaptopDonationStep4';
import Success from './Success';
import Error from './Error';

const DonationFlow = () => {
  const { currentStep, donationType, success } = useSelector((state) => state.donation);

  switch (currentStep) {
    case 1:
      return <DonationStep1 />;
    case 2:
      return <DonationStep2 />;
    case 3:
      return donationType === donation.cash ? <CashDonationStep3 /> : <LaptopDonationStep3 />;
    case 4:
      return donationType === donation.laptop ? <LaptopDonationStep4 /> : success ? <Success /> : <Error />;
    case 5:
      return success ? <Success /> : <Error />;

    default:
      <DonationStep1 />;
  }
};

export default DonationFlow;
