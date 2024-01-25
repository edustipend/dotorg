import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../Button/Button';

const NavbarLearner = ({ showMenu, closeMenu }) => {
  return (
    <>
      <nav></nav>

      {showMenu ? (
        <nav className="mobile-nav">
          <HashLink to={{ pathname: '/support-a-learner', hash: '#support-a-learner' }}>
            <Button label="Support A Learner" type={'secondary'} className="navBtn" onClick={() => closeMenu(!showMenu)} />
          </HashLink>
        </nav>
      ) : (
        <nav className="mobile-nav out" />
      )}
    </>
  );
};

export default NavbarLearner;

NavbarLearner.propTypes = {
  showMenu: PropTypes.bool,
  closeMenu: PropTypes.func
};
