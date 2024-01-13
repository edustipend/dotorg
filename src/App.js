import React from 'react';
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
import { Toaster } from "react-hot-toast";
import { toastStyle } from './styles/toastStyle';
initFirebaseApp();

function App() {
  const { isLoading } = useContext(ModalContext);
  const scrollOnRoute = useScrollToTop();
  const isOnline = useDetectInternet();
  return isOnline ? (
    <>
      {scrollOnRoute}
      <Toaster toastOptions={
        toastStyle
      } position="top-center" reverseOrder={false} />
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
