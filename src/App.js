import Navbar from './components/Navbar/';
import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import './App.css';

/**
 * TODO:
 * - Hook up to Firebase
 * - Deploy to Heroku
 * - Available for testing by Friday
 */

initFirebaseApp();

function App() {
  return (<><Navbar /><Routes /></>)
}

export default App;
