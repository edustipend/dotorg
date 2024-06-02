import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BreadCrumbs } from '../BreadCrumbs';
import { paths } from '../../../sections/TransparencyDashboard/constants';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('BreadCrumbs', () => {
  test('renders correctly with given paths', () => {
    renderWithRouter(<BreadCrumbs paths={paths} />);

    paths.forEach((path) => {
      expect(screen.getByText(path.title)).toBeInTheDocument();
    });
  });

  test('renders active link correctly', () => {
    renderWithRouter(<BreadCrumbs paths={paths} />, { route: paths[0].path });

    expect(screen.getByText(paths[0].title)).toHaveClass('active');
  });
});
