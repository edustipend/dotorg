const dataTest = 'start_application-id';
const headText = 'Stipend Application Sept. 2023';
const p1 = 'Hello there, Welcome to the month of September, how time flies! 🎉🎊';
const p2 =
  'As always, Edustipend is here to support you to fulfill your learning goals this month. To help us support you, we ask that you fill this form as completely as you can providing as much details as possible.';
const p3 =
  'Kindly note that this form will be closed for the September window by 11.00pm WAT on Friday, September 11, 2023  do well to complete it before that time.';
const p4 = 'We wish you all the best of the new month!';
const p5 = 'In Your Service,';
const p6 = 'The Edustipend Team ❤️';

const desc = [p1, p2, p3, p4, p5, p6];

const placeholder = 'Type your email here';
const paragraph = 'To help us support you, we ask that you fill this form as completely as you can providing as much details as possible.';

const quote = '“The secret to getting ahead is getting started." - Mark Twain';

const btn = {
  content: 'Continue',
  id: 'button_id',
  submit: 'submit'
};

const front = 'front';

const input = {
  inputID: 'email_id',
  inputLabel: 'Email Address',
  inputName: 'email',
  mockValidEmail: 'isaq@gmail.com',
  mockInvalidEmail: 'test.com'
};

export const TestId = {
  DATA_TEST: dataTest,
  HEAD_TEXT: headText,
  DESC: desc,
  PLACEHOLDER: placeholder,
  QUOTE: quote,
  PARAGRAPH: paragraph,
  BTN_ID: btn.id,
  BTN_CONTENT: btn.content,
  BTN_BG: btn.bg,
  BTN_SUBMIT: btn.submit,
  ICON_FRONT: front,
  INPUT_ID: input.inputID,
  INPUT_LABEL: input.inputLabel,
  INPUT_NAME: input.inputName,
  MOCK_VALID_EMAIL: input.mockValidEmail,
  MOCK_INVALID_EMAIL: input.mockInvalidEmail
};
