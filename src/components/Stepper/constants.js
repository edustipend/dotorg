import gaparrow from '../../assets/gaparrow.svg';

export const stepsData = [
  {
    id: 1,
    step: 'Step 1',
    select: 'Select Stipend Category',
    arrow: <img src={gaparrow} alt="gap arrow" />
  },
  {
    id: 2,
    step: 'Step 2',
    select: 'Stipend Request',
    arrow: <img src={gaparrow} alt="gap arrow" />
  },
  {
    id: 3,
    step: 'Step 3',
    select: 'Data Consent',
    arrow: <img src={gaparrow} alt="gap arrow" />
  },
  {
    id: 4,
    step: 'Step 4',
    select: "Let's Meet You",
    arrow: <img src={gaparrow} alt="gap arrow" />
  },
  {
    id: 5,
    step: 'Step 5',
    select: 'Submit'
    // arrow: <img src={gaparrow} alt="gap arrow" />
  }
];

export const Text = {
  BACK_ICON_TEXT: 'Back',
  TITLE: 'Step',
  PARAGRAPH: 'Select Stipend Category'
};

export const TestId = {
  BACK_ICON_TEST_ID: 'backarrow',
  CIRCULAR_STEPPER_TEST_ID: 'circular stepper',
  TITLE_TEST_ID: 'step 1',
  PARAGRAPH_TEST_ID: 'select stipend category',
  HORIZONTAL_STEPPER_TEST_ID: 'horizontal stepper'
};

export const radius = 15;
export const circleWidth = 50;
export const dashArray = radius * Math.PI * 2;
