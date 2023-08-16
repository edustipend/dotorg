import { render, screen } from '@testing-library/react';
import { TestConstants } from '../internals/testimonialsData';
import { Testimonials } from '../Testimonials';
const { componentTestId } = TestConstants;

describe('Testimonials', () => {
  describe('The component should render correctly', () => {
    it('Testimonials component should  be in the document', () => {
      render(<Testimonials />);
      expect(screen.getByTestId(componentTestId)).toBeInTheDocument();
    });
  });
});
