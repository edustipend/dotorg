import { getFormattedDate, getFormattedTime } from '../dateTimeUtil';

describe('dateTimeUtil', () => {
  test('it returns the correct formatted date', () => {
    expect(getFormattedDate('2022/12/12')).toBe('12 Dec 2022');
  });

  test('it returns the correct formatted time', () => {
    expect(getFormattedTime('Mon Sep 04 2023 06:13:15 GMT-0700 (Pacific Daylight Time)')).toBe('2:13 PM WAT');
    expect(getFormattedTime('Mon Sep 04 2023 06:13:15 GMT+0100')).toBe('6:13 AM WAT');
  });
});
