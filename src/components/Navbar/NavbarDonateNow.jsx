import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../Button/Button';

const NavbarDonateNow = ({ showMenu, closeMenu }) => {
  return (
    <>
      <nav></nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <HashLink to={{ pathname: '/support-a-learner/donate' }}>
            <Button label="Donate Now" type={'secondary'} className="navBtn" onClick={() => closeMenu(!showMenu)} />
          </HashLink>
        </nav>
      ) : (
        <nav className="mobile-nav out" />
      )}
    </>
  );
};

export default NavbarDonateNow;

NavbarDonateNow.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func
};
