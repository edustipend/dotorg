import { SeoFragment } from '../../../components/SeoFragment/SeoFragment';
import usePageView from '../../../hooks/usePageView';
import LatestDonations from '../../../sections/SupportALearner/LatestDonations';
import Supports from '../../../sections/SupportALearner/Supports';
import Reports from '../../../sections/SupportALearner/Reports';

export const SupportALearnerCampaign = () => {
  usePageView('campaigns-support-a-learner');
  return (
    <>
      <SeoFragment
        title="Edustipend | Campaigns | Support A Learner - Report"
        description="Donate to secure the future of learners in Nigeria"
        name="Edustipend"
        type="summary"
        website="https://www.edustipend.org/campaigns/support-a-learner"
      />
      <main>
        <LatestDonations />
        <Supports />
        <Reports />
      </main>
    </>
  );
};
