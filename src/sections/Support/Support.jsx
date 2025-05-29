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
            <Header className="support-header" dataTest={TEST_ID.SUPPORT_TITLE} color="primary" size="large">
              {SUPPORT_CONTENT.HEADER}
            </Header>
            <Header className="support-subheader" color="primary" dataTest={TEST_ID.SUPPORT_SUBTITLE} subheader={true} size="small">
              {SUPPORT_CONTENT.SUB_HEADER}
            </Header>
            <Text color="primary" content={SUPPORT_CONTENT.DESCRIPTION} className="support-subtext" dataTest={TEST_ID.SUPPORT_SUBTEXT} />
            <Link to={CTA.SUPPORT_A_LEARNER} target="_blank" rel="noopener noreferrer" className="support-cta">
              <Button label={SUPPORT_CONTENT.SUPPORT_BUTTON_TEXT} type="primary" dataTest={TEST_ID.SUPPORT_CTA}  />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SupportALearnerSection;
