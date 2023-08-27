import React from 'react';
// import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
// import Navbar from './components/Navbar';
import './App.css';
// import Footer from './components/Footer';
// import NotifyModal from './sections/NotifyMe/internals/NotifyModal';
// import NotifyMe from './sections/NotifyMe';
// import Modal from './components/Modal';
// import { ModalContext } from './context/ModalContext';
// import { useContext } from 'react';
// import LoadingMessage from './components/LoadingMessage';
import Stepper from './components/Stepper';
initFirebaseApp();

function App() {
  // const { isLoading } = useContext(ModalContext);
  return (
    <>
      {/* <Navbar />
      <Routes />
      <Footer />
      <NotifyModal>
        <NotifyMe />
      </NotifyModal>
      {isLoading ? <Modal><LoadingMessage size={'large'} /></Modal> : undefined} */}
      <Stepper />
    </>
  );
}

export default App;
