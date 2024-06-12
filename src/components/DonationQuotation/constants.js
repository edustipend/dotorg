export const constant = {
  dataArr: [
    {
      text: 'data subscription',
      textAlt: 'data subscriptions',
      cost: 10000
    },
    {
      text: 'course enrollment',
      textAlt: 'course enrollments',
      cost: 25000
    },
    {
      text: 'laptop',
      textAlt: 'laptops',
      cost: 400000
    }
  ],
  invalidAmount: "Amount can't be lower than ₦1,000",
  gratitude: (amount) => {
    return `Thankyou for the ₦${amount} donation`;
  }
};
