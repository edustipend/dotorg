export const title = 'Donations';
export const tableHeads = ['Name', 'Amount', 'Date'];
export const itemToRender = 10;

const currentYear = new Date().getFullYear();
const startYear = 2023;
const yearOptions = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);

export const DATE_RANGE_OPTIONS = [
  { label: 'Today', value: 'today' },
  { label: 'This Week', value: 'thisWeek' },
  { label: 'This Month', value: 'thisMonth' },
  ...yearOptions.map((year) => ({ label: `${year}`, value: `${year}` })),
  { label: 'All Time', value: 'allTime' }
];

export const CURRENCY_OPTIONS = [
  { label: 'NGN (₦)', value: 'NGN' },
  { label: 'USD ($)', value: 'USD' },
  { label: 'POUNDS (£)', value: 'GBP' },
  { label: 'EURO (€)', value: 'EUR' }
];
