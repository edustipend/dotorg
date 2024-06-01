import { render, screen } from '@testing-library/react';
import Target from '../Target';
import { targets } from '../../../../sections/TransaprencyDashboard/constants';
import { Testid } from '../constants';

describe('Target', () => {
  it('renders all passed in values', () => {
    render(<Target value={targets[0].value} icon={targets[0].icon} category={targets[0].category} />);

    expect(screen.getByText('goal')).toBeVisible();
    expect(screen.getByTestId(Testid.icon)).toBeVisible();
    expect(screen.getByTestId(Testid.value)).toBeVisible();
    expect(screen.getByTestId(Testid.category)).toBeVisible();
  });
});
