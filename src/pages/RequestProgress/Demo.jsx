import React from 'react';
import { Button } from '../../components/Button/Button';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./styles.css"

const Demo = () => {
  //   const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate()

  return (
    <div >
      <Outlet className="modals-outlet" />
      <div className="demo-container">
        <div>
          <h1>Request Stipend Demo</h1>
          <Link to="/demo-create/account">
            <Button label="Create an account" primary={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demo;
