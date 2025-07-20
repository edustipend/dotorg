import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import useHandleCTAClick from '../../../hooks/useHandleCTAClick';
import { content, TestId } from './constants';

import styles from './Hero.module.css';

const Hero = () => {
  const { handleCTAClick } = useHandleCTAClick();

  return (
    <section className={styles.bg} data-testid={TestId.WRAPPER}>
      <Container className={styles.hero}>
        <div className={styles.top}>
          <Header dataTest={TestId.HEAD_TEXT}>{content.headText}</Header>
          <Text dataTest={TestId.SUB_TEXT} content={content.subText} />
          <Button dataTest={TestId.BTN} label={content.btnLabel} type={content.btnType} onClick={() => handleCTAClick()} />
          <img data-testid={TestId.IMG} src={content.heroImage} alt={content.heroImageAlt} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
