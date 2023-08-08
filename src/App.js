import Routes from './routes';
import initFirebaseApp from './firebaseConfig';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
initFirebaseApp();

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}
export default App;
