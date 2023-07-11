import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Header from './components/Header';
import './App.css';

initFirebaseApp();

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
