const handleFocus = (setUserData, focus) => {
  setUserData((prev) => ({ ...prev, focus: !focus }));
};

const handleBlur = (setUserData, focus) => {
  setUserData((prev) => ({ ...prev, focus: !focus }));
};

const initial = {
  fullname: '',
  email: '',
  phone: '',
  company: '',
  title: '',
  message: '',
  status: '',
  toggle: false,
  focus: false,
  error: false,
  errorMessage: ''
};

const TestId = {
  AMOUNT_ID: 'donation_amount',
  COMPONENT_ID: 'donate_now_id',
  CONTENT_ID: 'content_id',
  IMAGE_ID: 'donate_now_image_id',
  HEADER_ID: 'donate_now_header',
  TEXT_ID: 'donate_now_text',
  FORM_ID: 'donate_now_form_id',
  BUTTON_ID: 'donate_button_id'
};

const constants = {
  aisha:
    "I didn't have sufficient data to pull through the duration of my course, but Edustipend came to my rescue. And now I made it to the final stage, where my team and I organized clean up program, and also provided character bins to curb plastic waste in our University( the project was achieved through grants from LEAP).",
  name: 'Aisha Daodu',
  title: 'Make a Donation',
  subtitle: 'Every donation, no matter how big or small makes a significant impact to our course.',
  anonymous: 'Donate as anonymous',
  quote: `To live without hope is to cease to live. – Fyodor Dostoyevsky`,
  tooltip_title: 'Why do we need this?',
  tooltip_subtitle: 'Your phone number is used to verify the transaction for legitimacy',
  donation_success_header: 'Your donation was successful',
  donation_success:
    'Thank you for choosing to donate to Edustipend. By donating, you are making a significant difference in learners’ lives, empowering them with the tools they need to thrive in their learning journey.',
  donation_failed_header: 'Transaction Unsuccessful',
  donation_failed: 'Your donation could not be completed at this time. Try again or use a different card.',
  text: 'text',
  fullName: 'First name and last name',
  email: 'email',
  Email_Address: 'Email Address',
  Enter_Email_Address: 'Enter Email Address',
  company: 'Company Name (if applicable)',
  company_name: 'Enter company name',
  number: 'number',
  Phone_number: 'Phone Number',
  Enter_Phone_number: 'Enter Phone number',
  Amount: 'Amount',
  NGN: 'NGN',
  secondary: 'secondary',
  invalidEmail: 'Please enter a valid email address',
  invalidAmount: 'Amoumt can not be less than 1000',
  invalidName: 'Please provide your first and last names',
  redirect_dev: 'http://localhost:3000/support-a-learner/donate',
  redirect_prod: 'https://www.edustipend.org/support-a-learner/donate'
};



export { constants, handleFocus, handleBlur, initial, TestId };
