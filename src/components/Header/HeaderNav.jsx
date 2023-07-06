import { NavLink } from "react-router-dom";
import "./styles.css";
import Button from "./Button";
const links = [
  {
    label: "Ambassador Program",
    to: "/ambassador-program",
  },
  {
    label: "Learn How It Works",
    to: "/howitworks",
  },
  {
    label: "Support A Learner",
    to: "/support-a-learner",
  },
];
const HeaderNav = ({ showMenu }) => {
  return (
    <>
      <nav className="headerNav">
        {links.map((link) => (
          <NavLink
            key={link.label}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to={link.to}
            style={
              link.label === "Support A Learner" ? { color: "#FEBD1C" } : {}
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <>
        {showMenu ? (
          <nav className="mobile-nav" style={{ transform: "translateX(0)" }}>
            {links.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to={link.to}
                style={
                  link.label === "Support A Learner" ? { color: "#72FFFF" } : {}
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div>
              <Button />
            </div>
          </nav>
        ) : (
          <nav
            className="mobile-nav"
            style={{ transform: "translateX(-100vw)" }}
          />
        )}
      </>
    </>
  );
};

export default HeaderNav;
