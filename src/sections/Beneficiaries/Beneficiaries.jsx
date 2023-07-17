import Header from '../../components/Header';
import Text from '../../components/Text/';

export const Beneficiaries = () => (
  <section>
    <Header size="medium">Our Beneficiaries so far</Header>
    <Header size="small" subheader={true}>
      Our Beneficiaries
    </Header>
    <Text content="We analysed the applications by gender, age, and state of origin, and we saw the following:" />
  </section>
);
