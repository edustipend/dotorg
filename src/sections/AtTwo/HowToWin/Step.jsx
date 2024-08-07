import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { stepPropShape } from './constants';
import styles from './HowToWin.module.css';

const Step = ({ step }) => {
  return (
    <div className={styles.step} key={step.title}>
      <img className={styles.icon} src={step.icon} alt={step.title} />
      <h1 className={styles.title}>{step.title}</h1>
      <p className={styles.desc}>{step.description}</p>
      <div className={styles.line} />
      <h2 className={styles.stepp}>Steps</h2>
      <ol className={styles.lists}>
        {step.steps.map((item) => (
          <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ol>
      <Link className={styles.link} to={step.btn.path}>
        <Button className={styles.btn} type={step.btn.variant} label={step.btn.label} />
      </Link>
    </div>
  );
};

export default Step;

Step.propTypes = {
  step: stepPropShape
};
