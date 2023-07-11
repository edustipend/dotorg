import { useState } from 'react';
import Button from '../Button';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import PropTypes from 'prop-types';
import { TestId } from './constants';
import { Menu, Close } from '../../assets/index';
import Container from '../Container/Container';

import './styles.css';

export const Header = ({ dataTest }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="header" data-testid={dataTest}>
      <Container>
        <HeaderLogo />
        <HeaderNav showMenu={isToggle} />
        <Button label="Request stipend" />
        <div className="menu-icon" onClick={() => setIsToggle(!isToggle)}>
          <img src={isToggle ? Close : Menu} alt="menu-close" />
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  dataTest: PropTypes.string
};

Header.defaultProps = {
  dataTest: TestId.DEFAULT_HEADER_TEST_ID
};
