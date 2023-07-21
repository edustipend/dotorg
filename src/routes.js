import { Routes as AppRoutes, Route, useSearchParams } from 'react-router-dom';
import AmbassadorPage from './pages/ambassador';
import LandingPage from './pages/landing';
import LandingPageV2 from './pages/landing-v2';
import StartApplication from './sections/StartApplication';

let V2_FEATURE_FLAG_ON = false;

const Routes = () => {
  let [searchParams] = useSearchParams();
  const v2TurnedOn = searchParams.get('v2');
  V2_FEATURE_FLAG_ON = v2TurnedOn === 'true';

  return (
    <AppRoutes>
      <Route path="/ambassador-program" element={<AmbassadorPage />} />
      <Route path="/" element={V2_FEATURE_FLAG_ON ? <LandingPageV2 /> : <LandingPage />} />
      <Route path="/request-stipend" element={<StartApplication />} />
    </AppRoutes>
  );
};

export default Routes;
