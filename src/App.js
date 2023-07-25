import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import './App.css';
<<<<<<< HEAD
=======
import Footer from './components/Footer';
>>>>>>> 61e5d49d27e0d18ad52eb70ae9fced3a830e1ce7

initFirebaseApp();

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
