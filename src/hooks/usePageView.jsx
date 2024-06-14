import { useCallback, useEffect } from 'react';
import { pageView } from '../utils/googleTagManager/googleTagManager';

const usePageView = (title) => {
  const edustipendTitle = 'Edustipend.org - Resources and financial support for your learning';

  const loadPageView = useCallback(() => {
    pageView(window.location.href, title);
  }, [title]);

  useEffect(() => {
    loadPageView();

    return () => {
      //restore the original title when component unmounts
      document.title = edustipendTitle;
    };
  }, [loadPageView, edustipendTitle]);
};

export default usePageView;
