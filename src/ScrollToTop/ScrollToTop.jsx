import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  const scroll = useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return scroll;
};
