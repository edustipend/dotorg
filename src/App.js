// import Navbar from './components/Navbar/';
// import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import './App.css';
import HowItWorks from './components/Howitworks/Howitworks';
import Beneficiaries from './components/Beneficiaries/Beneficiaries';
import TakeOffBurden from './components/TakaOffBurden/TakeOffBurden';

// import { Footer } from './components/Footer/Footer';
// import Circles from './assets/light_border.png';

initFirebaseApp();

function App() {
  return (
    <>
      {/* <img src={Circles} className="circles-img" />
      <Navbar />
      <Routes />
      <Footer /> */}
      <HowItWorks />
      <Beneficiaries />
      <TakeOffBurden />
    </>
  );
}

export default App;
