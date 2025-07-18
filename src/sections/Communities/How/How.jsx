import Container from '../../../components/Container';
import styles from './How.module.css';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Slot from './Slot';
import { content, TestId } from './constants';

const How = () => {
  return (
    <section className={styles.bg} data-testid={TestId.WRAPPER}>
      <Container className={styles.wrapper}>
        <Header size={content.headSize} className={styles.header} dataTest={TestId.HEAD_TEXT}>
          {content.headText}
        </Header>
        <Text content={content.subText} className={styles.text} dataTest={TestId.SUB_TEXT} />
        <div className={styles.how} dataTest={TestId.HOW}>
          {content.how.map((step) => (
            <Slot key={step.title} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default How;
