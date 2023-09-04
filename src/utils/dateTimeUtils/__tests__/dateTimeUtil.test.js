import { getFormattedDate, getFormattedTime } from '../dateTimeUtil';

describe('dateTimeUtil', () => {
  test('it returns the correct formatted date', () => {
    expect(getFormattedDate('12/12/2022')).toBe('12 Dec 2022');
  });

  test('it returns the correct formatted time', () => {
    expect(getFormattedTime('Mon Sep 04 2023 06:13:15 GMT-0700 (Pacific Daylight Time)')).toBe('1:13 PM WAT');
    expect(getFormattedTime('Mon Sep 04 2023 06:13:15 GMT+0100')).toBe('5:13 AM WAT');
  });
});
