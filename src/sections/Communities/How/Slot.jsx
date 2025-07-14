import { content, TestId } from './constants';

const Slot = ({ step }) => {
  return (
    <div key={step.title} data-testid={TestId.HOW_STEP}>
      <img src={step.icon} alt={step.title} />
      <h2>{step.title}</h2>
      <p>{step.description}</p>
    </div>
  );
};

export default Slot;

Slot.propTypes = {
  step: content.props
};
