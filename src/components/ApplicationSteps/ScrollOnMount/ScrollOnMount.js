import { useEffect } from 'react';

export const ScrollOnMount = () => {
  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, []);
};
