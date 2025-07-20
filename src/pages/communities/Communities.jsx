import { SeoFragment } from '../../components/SeoFragment/SeoFragment';
import { Hero, How, Apply, CommunityFaq } from '../../sections/Communities';
import Eligibility from '../../sections/Communities/Eligibility/Eligibility';
import ImportantInformation from '../../sections/Communities/ImportantInformation/ImportantInformation';

export const Communities = () => {
  return (
    <>
      <SeoFragment
        title="Edustipend | Communities"
        description="Empowering Communities, One Scholar at a Time"
        name="Edustipend"
        type="summary"
        website="https://www.edustipend.org/communities"
      />
      <Hero />
      <How />
      <Eligibility />
      <ImportantInformation />
      <Apply />
      <CommunityFaq />
    </>
  );
};
