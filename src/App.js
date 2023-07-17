import Navbar from './components/Navbar/';
import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Circles from './assets/light_border.png';



initFirebaseApp();

function App() {
  return (
    <>
      <img src={Circles} className="circles-img" alt="background circles" />
      <Navbar />
      <Routes />
      <Footer /> 
    </>
  );
}

export default App;
