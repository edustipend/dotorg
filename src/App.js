// import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
// import Navbar from './components/Navbar';
import './App.css';

import Beneficiaries from "./sections/Beneficiaries";
import HowItWorks from "./sections/HowItWorks";
import TakeOffBurden from "./sections/TakeOffBurden";



initFirebaseApp();

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes /> */}
      <HowItWorks />
      <Beneficiaries />
      <TakeOffBurden />
    </>
  );
}

export default App;
