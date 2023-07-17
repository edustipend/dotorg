import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import './App.css';

initFirebaseApp();

function App() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
