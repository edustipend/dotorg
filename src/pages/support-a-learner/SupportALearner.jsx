import HeroSection from '../../sections/SupportALearner/HeroSection/HeroSection';
import OurImpacts from '../../sections/SupportALearner/OurImpacts';
import HowWeSelect from '../../sections/SupportALearner/HowWeSelect';
import DonationRange from '../../sections/SupportALearner/DonationRange';
import LatestDonations from '../../sections/SupportALearner/LatestDonations/LatestDonations';
import Partners from '../../sections/SupportALearner/Partners/Partners';

export const SupportALearner = () => {
  return (
    <>
      <HeroSection />
      <OurImpacts />
      <Partners />
      <LatestDonations />
      <DonationRange />
      <HowWeSelect />
    </>
  );
};
