//import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
//import Navbar from './components/Navbar';
import './App.css';
//import Footer from './components/Footer';
import LearnerDashboard from './pages/learner-dashboard';

initFirebaseApp();

function App() {
  return (
    <>
      {/**
      *  <Navbar />
      <Routes />
      <Footer />
      */}
      <LearnerDashboard />
    </>
  );
}

export default App;
