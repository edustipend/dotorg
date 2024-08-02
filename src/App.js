import React, { useEffect, useMemo } from 'react';
import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import NotifyModal from './sections/NotifyMe/internals/NotifyModal';
import NotifyMe from './sections/NotifyMe';
import Modal from './components/Modal';
import { ModalContext } from './context/ModalContext';
import { useContext } from 'react';
import { useScrollToTop } from './ScrollToTop/ScrollToTop';
import LoadingMessage from './components/LoadingMessage';
import useDetectInternet from './hooks/useDetectInternet';
import NoInternet from './components/NoInternet/NoInternet';
import { Toaster } from 'react-hot-toast';
import TagManager from 'react-gtm-module';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
initFirebaseApp();
const { REACT_APP_GTM } = process.env;

function App() {
  const location = useLocation();
  const { isLoading } = useContext(ModalContext);
  const scrollOnRoute = useScrollToTop();
  const isOnline = useDetectInternet();
  const gtmId = REACT_APP_GTM;
  const searchParams = new URLSearchParams(location.search);

  /**
   * On app load, get search params which must include utm_referrer
   * if available, store the params in the cookies with a life span of 7 days
   *
   * on successful/completed donation, clear the user's referral params.
   */
  const paramsObject = {};
  for (const [key, value] of searchParams.entries()) {
    paramsObject[key] = value;
  }

  if (searchParams.get('status') === 'successful' || searchParams.get('status') === 'completed') {
    Cookies.remove('referralParams');
  } else if (searchParams.get('utm_referrer') && Object.keys(paramsObject).length > 0) {
    Cookies.set('referralParams', JSON.stringify(paramsObject), {
      expires: 7
    });
  }

  //get the gtmId from the env file then hold the value in a  memo
  const tagManagerArgs = useMemo(
    () => ({
      gtmId
    }),
    [gtmId]
  );
  //initialize the process everytime the user enters the site as this is the app's entry point
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [tagManagerArgs]);

  return isOnline ? (
    <>
      {scrollOnRoute}
      <Toaster
        toastOptions={{
          style: {
            maxWidth: '700px',
            padding: '12px 16px',
            fontSize: '17px',
            fontWeight: '400'
          },
          error: {
            style: {
              color: 'red'
            }
          },
          success: {
            style: {
              color: 'green'
            }
          }
        }}
        position="top-center"
        reverseOrder={false}
      />

      <Navbar />
      <Routes />
      <Footer />
      <NotifyModal>
        <NotifyMe />
      </NotifyModal>
      {isLoading ? (
        <Modal>
          <LoadingMessage size={'large'} />
        </Modal>
      ) : undefined}
    </>
  ) : (
    <NoInternet />
  );
}
export default App;
