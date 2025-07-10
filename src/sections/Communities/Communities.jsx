import { Link } from 'react-router-dom';
import communitiesImage from '../../assets/c-landing-image.png';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { CTA, COMMUNITIES_CONTENT, TEST_ID } from './contants';
import './styles.css';

const CommunitiesSection = () => {
  return (
    <div className="communities-container" data-testid={TEST_ID.COMMUNITIES_CONTAINER}>
      <Container>
        <div className="communities-wrapper">
          <div className="communities-left">
            <img className="communities-image" src={communitiesImage} alt="communities" data-testid={TEST_ID.COMMUNITIES_IMAGE} />
          </div>
          <div className="communities-right">
            <Header className="communities-header" dataTest={TEST_ID.COMMUNITIES_TITLE} color="primary" size="large">
              {COMMUNITIES_CONTENT.HEADER}
            </Header>
            <Header className="communities-subheader" color="primary" dataTest={TEST_ID.COMMUNITIES_SUBTITLE} subheader={true} size="small">
              {COMMUNITIES_CONTENT.SUB_HEADER}
            </Header>
            <Text color="primary" content={COMMUNITIES_CONTENT.DESCRIPTION} className="communities-subtext" dataTest={TEST_ID.COMMUNITIES_SUBTEXT} />
            <Link to={CTA.COMMUNITIES} target="_blank" rel="noopener noreferrer" className="communities-cta">
              <Button label={COMMUNITIES_CONTENT.COMMUNITIES_BUTTON_TEXT} type="secondary" dataTest={TEST_ID.COMMUNITIES_CTA} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommunitiesSection;
