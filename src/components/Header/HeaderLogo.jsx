import Logo from "../../assets/edustipend-logo.png";
import { Link } from "react-router-dom";
import "./styles.css";

const HeaderLogo = () => {
  return (
    <Link to="/">
      <div className="headerLogo">
        <img src={Logo} alt="edustipend logo" />
        <p>edustipend</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
