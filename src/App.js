import React from 'react';
import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import NotifyModal from './sections/NotifyMe/internals/NotifyModal';
import NotifyMe from './sections/NotifyMe';

initFirebaseApp();

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
      <NotifyModal>
        <NotifyMe />
      </NotifyModal>
    </>
  );
}

export default App;
