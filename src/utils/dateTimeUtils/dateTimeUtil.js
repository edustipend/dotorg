import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs'; // dependent on utc plugin

dayjs.extend(utc);
dayjs.extend(timezone);

const TIMEZONE = 'Africa/Lagos';

export const isValidDate = (date) => dayjs(date).isValid();

export const getFormattedDate = (date = new Date()) => {
  return isValidDate(date) ? dayjs.tz(date, TIMEZONE).format('DD MMM YYYY') : 'Invalid Date';
};

export const getFormattedTime = (date = new Date()) => {
  return isValidDate(date) ? `${dayjs.tz(date, TIMEZONE).add(1, 'hour').format('h:mm A')} WAT` : 'Invalid Time';
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);

  return formatter.format(date);
};

/**
 * Gets the start date based on the given frequency.
 *
 * @param {string} frequency - The frequency to calculate the start date for.
 * Possible values are 'today', 'thisWeek', 'monthly', and 'tomorrow'.
 * - 'today': Start date is 1 day before today.
 * - 'thisWeek': Start date is the beginning of the current week.
 * - 'monthly': Start date is 30 days before today.
 * - 'tomorrow': Start date is 1 day after today.
 * @returns {Date} The calculated start date.
 */
export const getStartDate = (frequency) => {
  const today = new Date();
  let newStartDate;
  let dayOfWeek;

  switch (frequency) {
    case 'today':
      newStartDate = new Date(today);
      newStartDate.setDate(today.getDate());
      break;
    case 'thisWeek':
      newStartDate = new Date(today);
      dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
      // Subtract the current day of the week from the current date to get the previous Sunday
      newStartDate.setDate(today.getDate() - dayOfWeek);
      break;
    case 'monthly':
      newStartDate = new Date(today);
      newStartDate.setDate(today.getDate() - 30);
      break;
    case 'tommorow':
      newStartDate = new Date(today);
      newStartDate.setDate(today.getDate() + 1);
      break;
    default:
      newStartDate = new Date(today);
  }

  return newStartDate;
};
