import Button from "./Button";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import { Menu, Close } from "../../assets/index";
import "./styles.css";
import { useState } from "react";

export const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="header" data-testid="headerId">
      <HeaderLogo />
      <HeaderNav showMenu={isToggle} />
      <Button />
      <div className="menu-icon" onClick={() => setIsToggle(!isToggle)}>
        <img src={isToggle ? Close : Menu} alt="menu-close" />
      </div>
    </header>
  );
};
