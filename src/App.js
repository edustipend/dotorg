import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import FooterV2 from './components/FooterV2/FooterV2';
import './App.css';


initFirebaseApp();

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <FooterV2 />
    </>
  );
}

export default App;
