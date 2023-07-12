import Header from '../../components/Header';
import Text from '../../components/Text/';

export const Beneficiaries = () => (
  <section>
    <Header size="large" text="Our Beneficiaries so far" />
    <Header size="small" text="Our Beneficiaries" upperCase={true} />
    <Text content="We analysed the applications by gender, age, and state of origin, and we saw the following:" />
  </section>
);
