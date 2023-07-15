// import Navbar from './components/Navbar/';
// import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import './App.css';
// import { Footer } from './components/Footer/Footer';
// import Circles from './assets/light_border.png';
import HowItWorks from "./sections/HowItWorks/Howitworks";
import Beneficiaries from "./sections/Beneficiaries/Beneficiaries";
import TakeOffBurden from "./sections/TakeOffBurden/TakeOffBurden";


initFirebaseApp();

function App() {
  return (
    <>
      {/* <img src={Circles} className="circles-img" alt="background circles" />
      <Navbar />
      <Routes />
      <Footer />  */}
      <HowItWorks />
      <Beneficiaries />
      <TakeOffBurden />
    </>
  );
}

export default App;
