import { formatMoney } from '../formatMoney';

describe('formatMoney', () => {
  it('should format 0 correctly', () => {
    expect(formatMoney(0)).toBe('₦0');
  });

  it('should format a small number correctly', () => {
    expect(formatMoney(1234)).toBe('₦1,234');
  });

  it('should format a large number correctly', () => {
    expect(formatMoney(1234567890)).toBe('₦1,234,567,890');
  });

  it('should format a number with decimal points correctly by rounding down', () => {
    expect(formatMoney(1234.56)).toBe('₦1,235');
  });

  it('should format a number with maximumFractionDigits of 0', () => {
    expect(formatMoney(1234.99)).toBe('₦1,235');
  });
});
