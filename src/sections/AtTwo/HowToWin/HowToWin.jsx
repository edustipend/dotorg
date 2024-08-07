import Container from '../../../components/Container';
import Header from '../../../components/Header';
import { description, steps, TestId, title } from './constants';
import Text from '../../../components/Text';
import Step from './Step';
import styles from './HowToWin.module.css';

export const HowToWin = () => {
  return (
    <div className={styles.container} data-testid={TestId.HOW_TO_WIN}>
      <Container>
        <Header className={styles.header} size="medium" dataTest={TestId.HEAD_TEXT}>
          {title}
        </Header>
        <Text className={styles.text} content={description} dataTest={TestId.SUB_TEXT} />

        <div className={styles.steps} data-testid={TestId.STEPS}>
          {steps.map((step) => (
            <Step step={step} key={step.title} />
          ))}
        </div>
      </Container>
    </div>
  );
};
