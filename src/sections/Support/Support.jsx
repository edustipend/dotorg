import { Link } from 'react-router-dom';
import supportImage from '../../assets/sal-image-two.png';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { CTA, SUPPORT_CONTENT, TEST_ID } from './contants';
import './styles.css';

const SupportALearnerSection = () => {
  return (
    <div className="support-container" data-testid={TEST_ID.SUPPORT_CONTAINER}>
      <Container>
        <div className="support-wrapper">
          <div className="support-left">
            <img className="support-image" src={supportImage} alt="support" data-testid={TEST_ID.SUPPORT_IMAGE} />
          </div>
          <div className="support-right">
            <Header className="support-header" dataTest={TEST_ID.SUPPORT_TITLE} color="primary" size="small">
              {SUPPORT_CONTENT.HEADER}
            </Header>
            <Text color="primary" content={SUPPORT_CONTENT.DESCRIPTION} className="support-subtext" dataTest={TEST_ID.SUPPORT_SUBTEXT} />
            <div className="support-ctas bigscreen">
              <Link to={CTA.SUPPORT_A_LEARNER} target="_blank" rel="noopener noreferrer">
                <Button size="large" label="I want to support a learner" type="primary" className="support-cta" dataTest={TEST_ID.SUPPORT_CTA} />
              </Link>
              <Link to={CTA.VIEW_IMPACT} target="_blank" rel="noopener noreferrer">
                <Button size="large" label="View our impact stories" type="dark" className="support-cta" dataTest={TEST_ID.IMPACT_CTA} />
              </Link>
            </div>
            <div className="support-ctas mobile">
              <Link to={CTA.SUPPORT_A_LEARNER} target="_blank" rel="noopener noreferrer">
                <Button size="small" label="I want to support a learner" type="primary" className="support-cta" dataTest={TEST_ID.SUPPORT_CTA} />
              </Link>
              <Link to={CTA.VIEW_IMPACT} target="_blank" rel="noopener noreferrer">
                <Button size="small" label="View our impact stories" type="dark" className="support-cta" dataTest={TEST_ID.IMPACT_CTA} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SupportALearnerSection;
