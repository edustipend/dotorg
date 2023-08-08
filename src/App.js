import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Modal from './components/Modal';
import NotifyMe from './sections/NotifyMe';
initFirebaseApp();

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
      <Modal>
        <NotifyMe/>
      </Modal>
    </>
  );
}
export default App;
