import { useState, useEffect } from 'react';
import { APPLICATION_WINDOW_STATUS, getData } from '../services/ApiClient';
import toast from 'react-hot-toast';

const useApplicationWindowStatus = () => {
  const [isWindowClosed, setIsWindowClosed] = useState(false);

  useEffect(() => {
    const checkWindowStatus = async () => {
      try {
        const res = await getData(APPLICATION_WINDOW_STATUS);
        res?.applicationStatus && setIsWindowClosed(res.applicationStatus);
      } catch (error) {
        toast.error(`Unable to fetch application window status. ${error.message}!`);
      }
    };
    checkWindowStatus();
  }, []);

  return isWindowClosed;
};

export default useApplicationWindowStatus;
