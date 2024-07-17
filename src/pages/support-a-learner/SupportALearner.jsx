import HeroSection from '../../sections/SupportALearner/HeroSection';
import OurImpacts from '../../sections/SupportALearner/OurImpacts';
import HowWeSelect from '../../sections/SupportALearner/HowWeSelect';
import DonationRange from '../../sections/SupportALearner/DonationRange';
import LatestDonations from '../../sections/SupportALearner/LatestDonations';
import Partners from '../../sections/SupportALearner/Partners';
import Supports from '../../sections/SupportALearner/Supports';
import BeneficiaryTestimonies from '../../sections/SupportALearner/BeneficiaryTestimonies/BeneficiaryTestimonies';
import { SeoFragment } from '../../components/SeoFragment/SeoFragment';

export const SupportALearner = () => {
  return (
    <>
      <SeoFragment
        title="Edustipend | Support A Learner - Donate Now"
        description="Donate to secure the future of learners in Nigeria"
        name="Edustipend"
        type="summary"
        website="https://www.edustipend.org/support-a-learner"
      />
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
