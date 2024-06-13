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
 * Possible values are 'daily', 'weekly', and 'monthly'.
 * - 'daily': Start date is 1 day before today.
 * - 'weekly': Start date is 7 days before today.
 * - 'monthly': Start date is 30 days before today.
 * @returns {Date} The calculated start date.
 */
export const getStartDate = (frequency) => {
  const today = new Date();
  let newStartDate;

  switch (frequency) {
    case 'daily':
      newStartDate = new Date(today);
      newStartDate.setDate(today.getDate() - 1);
      break;
    case 'weekly':
      newStartDate = new Date(today);
      newStartDate.setDate(today.getDate() - 7);
      break;
    case 'monthly':
      newStartDate = new Date(today);
      newStartDate.setDate(today.getDate() - 30);
      break;
    default:
      newStartDate = new Date(today);
  }

  return newStartDate;
};
