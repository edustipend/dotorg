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
