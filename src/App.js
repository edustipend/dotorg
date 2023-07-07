import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import './App.css';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header';

initFirebaseApp();

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
