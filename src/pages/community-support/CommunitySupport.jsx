import { SeoFragment } from '../../components/SeoFragment/SeoFragment';
import { Hero, How, Apply, CommunityFaq } from '../../sections/Communities';
import Eligibility from '../../sections/Communities/Eligibility/Eligibility';
import ImportantInformation from '../../sections/Communities/ImportantInformation/ImportantInformation';
import Partners from '../../sections/SupportALearner/Partners/Partners';

export const Communities = () => {
  return (
    <>
      <SeoFragment
        title="Edustipend | Communities"
        description="Empowering Communities, One Learner at a Time"
        name="Edustipend"
        type="summary"
        website="https://www.edustipend.org/communities"
      />
      <Hero />
      <Partners />
      <How />
      <Eligibility />
      <ImportantInformation />
      <Apply />
      <CommunityFaq />
    </>
  );
};
