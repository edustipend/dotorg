import { randomMessage } from '../generateRandomMessage';

describe('generates a random message each time the function is called', () => {
  const mockArray = ['Random1', 'Random2', 'Random3', 'Random4'];

  it('returns a random message from the array', () => {
    const index = 2;
    const mockedRandom = jest.spyOn(Math, 'random').mockReturnValue(index / mockArray.length);

    const result = randomMessage(mockArray, mockArray.length);

    expect(result).toBe(mockArray[index]);

    mockedRandom.mockRestore();
  });
});
