import { useEffect } from 'react';

export const ScrollOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
