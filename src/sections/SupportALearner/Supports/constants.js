export const headText = 'SUPPORT A LEARNER';
export const subHeadText = 'ABOUT THIS PROJECT';
export const content1 = 'Over the past year, Edustipend has empowered over 500 Nigerians to pursue their aspirations by providing learning stipends.';
export const content2 =
  'Our stipends encompass essential resources such as laptops, course vouchers, and data subscriptions, benefiting an average of 37 young Nigerians monthly across all 36 states of Nigeria.';
export const content3 =
  'The impact of our support has been remarkable, manifesting in the form of newfound employment opportunities, accelerated skill development, and the establishment of sustainable businesses. We are committed to sustaining this positive change and invite your collaboration in achieving this goal.';
export const content4 =
  'In pursuit of our mission, we aim to raise N5.4 million, which will facilitate the provision of stipends for the coming nine months. These funds will enable us to award five laptops, 27 Data subscriptions, and a Course/School fees stipend to 37 young persons.';
export const content5 =
  'We invite you to join us on this mission of empowering our young talents to achieve their dreams by removing the barriers to their learning. You can take action by donating, and sharing with your network as well.';
export const progressText1 = 'GOAL:';
export const progressText2 = '₦5,400,000';
export const AMT_RAISED_TEXT = 'raised';
export const AMOUNT_RAISED = '₦1,155,000';

export const TestId = {
  WRAPPER: 'wrapper-el',
  HEAD_TEXT: 'head_text-el',
  SUB_HEAD_TEXT: 'desc-el',
  CONTENT1: 'cont-el-1',
  CONTENT2: 'cont-el-2',
  CONTENT3: 'cont-el-3',
  CONTENT4: 'cont-el-4',
  CONTENT5: 'cont-el-5',
  progressText1: 'progress-el-1',
  progressText2: 'progress-el-2',
  OUTER_DIV: 'outer-div',
  INNER_DIV: 'inner-div',
  AMT_RAISED_TEXT: 'amt-text-el',
  AMT_RAISED: 'amt-el'
};

export const AMT_RAISED = 1155000;
export const maxValue = 5400000;

export const progressPercentage = (AMT_RAISED / maxValue) * 100;

export const innerColor = `conic-gradient(#5801ff 0deg ${progressPercentage}%, #febd1c33 ${progressPercentage}deg 360deg)`;

export const innerStyle = {
  background: innerColor
};