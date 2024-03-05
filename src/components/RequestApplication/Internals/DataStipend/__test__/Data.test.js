import { DataStipend } from '../DataStipend';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TestId } from '../../../constants';
import store from '../../../../../store';

describe('Data Stipend Component', () => {
  it('the component should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DataStipend />
        </BrowserRouter>
      </Provider>
    );
    const data = screen.getByTestId(TestId.DATA_STIPEND);
    expect(data).toBeInTheDocument();
  });
  it('The component should have 5 nodes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DataStipend />
        </BrowserRouter>
      </Provider>
    );
    const nodes = screen.getByTestId(TestId.DATA_STIPEND);
    expect(nodes.childNodes).toHaveLength(5);
  });
});
