import { Routes as AppRoutes, Route } from 'react-router-dom';
import AmbassadorPage from './pages/ambassador';
//import LandingPage from './pages/landing';
import LandingPageV2 from './pages/landing-v2';
import RequestStipendPage from './pages/request-stipend';
import AtOne from './pages/at-one';

//let V2_FEATURE_FLAG_ON = false;

const Routes = () => {
  //let [searchParams] = useSearchParams();
  //const v2TurnedOn = searchParams.get('v2');
  //V2_FEATURE_FLAG_ON = v2TurnedOn === 'true';

  return (
    <AppRoutes>
      <Route path="/ambassador-program" element={<AmbassadorPage />} />
      <Route path="/request-stipend" element={<RequestStipendPage />} />
      <Route path="/" element={<LandingPageV2 />} />
      <Route path="/at-one" element={<AtOne />} />
    </AppRoutes>
  );
};

export default Routes;
