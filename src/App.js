// import Routes from './routes';
import Stepper from './components/Stepper';
import initFirebaseApp from './firebaseConfig';
// import Navbar from './components/Navbar';
// import './App.css';


initFirebaseApp();

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Routes /> */}
      <Stepper />
    </>
  );
}

export default App;
