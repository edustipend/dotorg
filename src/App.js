import Navbar from "./components/Navbar/";
import Routes from "./routes";
import initFirebaseApp from "./firebaseConfig";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Circles from "./assets/light_border.png";
import Header from "./components/Header";

initFirebaseApp();

function App() {
  return (
    <>
      {/* <img src={Circles} className="circles-img" /> */}
      <Header />
      {/* <Navbar /> */}
      <Routes />
      <Footer />
    </>
  );
}

export default App;
