import { getStateIdentifier, STATE_OPTION } from '../index';

describe('getStateIdentifier', () => {
  it('should return the correct state identifier for a given state label', () => {
    // Test each state label and its corresponding value
    STATE_OPTION.forEach((state) => {
      const { label, value } = state;
      const result = getStateIdentifier(label);

      expect(result).toBe(value);
    });
  });

  it('should return undefined for an unknown state label', () => {
    const unknownStateLabel = 'Unknown State of Origin';
    const result = getStateIdentifier(unknownStateLabel);

    expect(result).toBeUndefined();
  });
});
