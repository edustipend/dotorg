import { CourseStipend } from '../CourseStipend';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TestId } from '../../../constants';
import store from '../../../../../store';

describe('Course Stipend Component', () => {
  it('the component should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CourseStipend />
        </BrowserRouter>
      </Provider>
    );
    const course = screen.getByTestId(TestId.COURSE_STIPEND);
    expect(course).toBeInTheDocument();
  });
  it('The component should have 5 nodes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CourseStipend />
        </BrowserRouter>
      </Provider>
    );
    const nodes = screen.getByTestId(TestId.COURSE_STIPEND);
    expect(nodes.childNodes).toHaveLength(5);
  });
});
