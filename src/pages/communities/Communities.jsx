import { SeoFragment } from '../../components/SeoFragment/SeoFragment';
import { Hero, How } from '../../sections/Communities';

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
    </>
  );
};
