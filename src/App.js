import Navbar from './components/Navbar/';
import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Circles from './assets/light_border.png';

/**
 * TODO:
 * - Hook up to Firebase
 * - Deploy to Heroku
 * - Available for testing by Friday
 */

initFirebaseApp();

function App() {
  return (
    <>
      <img src={Circles} className='circles-img' />
      <Navbar />
      <Routes />
      <Footer />
    </>
  )
}

export default App;
