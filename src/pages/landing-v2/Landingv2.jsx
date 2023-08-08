import Hero from '../../sections/Hero';
import TestimonialsSection from '../../sections/Testimonials';
import HowItWorksSection from '../../sections/HowItWorks';
import BeneficiariesSection from '../../sections/Beneficiaries';
import TakeOffBurdenSection from '../../sections/TakeOffBurden';
import RequestSection from '../../sections/Request';
import Modal from '../../components/Modal';
import NotifyMe from '../../sections/NotifyMe';

export const LandingV2 = () => {
  return (
    <div>
      <Hero />
      <HowItWorksSection />
      <BeneficiariesSection />
      <TakeOffBurdenSection />
      <TestimonialsSection />
      <RequestSection />
      <Modal>
        <NotifyMe />
      </Modal>
    </div>
  );
};
