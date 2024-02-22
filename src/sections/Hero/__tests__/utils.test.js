import { StipendCategory } from '../constants';
import { getCurrentStipend } from '../utils';

describe('Hero Utils', () => {
  it('should render the right text for each current stipend', () => {
    expect(getCurrentStipend(StipendCategory.DATA)).toBe('some');
    expect(getCurrentStipend(StipendCategory.FEES)).toBe('some');
    expect(getCurrentStipend(StipendCategory.STIPEND)).toBe('some');
  });
});
