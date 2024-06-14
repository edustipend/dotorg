import HeroSection from '../../sections/SupportALearner/HeroSection';
import OurImpacts from '../../sections/SupportALearner/OurImpacts';
import HowWeSelect from '../../sections/SupportALearner/HowWeSelect';
import DonationRange from '../../sections/SupportALearner/DonationRange';
import LatestDonations from '../../sections/SupportALearner/LatestDonations';
import Partners from '../../sections/SupportALearner/Partners';
import Supports from '../../sections/SupportALearner/Supports';
import BeneficiaryTestimonies from '../../sections/SupportALearner/BeneficiaryTestimonies/BeneficiaryTestimonies';
import usePageView from '../../hooks/usePageView';

export const SupportALearner = () => {
  usePageView('Support-a-learner');
  return (
    <>
      <HeroSection />
      <OurImpacts />
      <Partners />
      <LatestDonations />
      <Supports />
      <DonationRange />
      <BeneficiaryTestimonies />
      <HowWeSelect />
    </>
  );
};
