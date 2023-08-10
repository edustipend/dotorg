import { Routes as AppRoutes, Route, useSearchParams } from 'react-router-dom';
import AmbassadorPage from './pages/ambassador';
import LandingPage from './pages/landing';
import LandingPageV2 from './pages/landing-v2';
import RequestStipendPage from './pages/request-stipend';
import LearnerDashboard from './pages/learner-dashboard';
import Home from './sections/LearnerDashboard/Home';
import Submissions from './sections/LearnerDashboard/Submissions';
import MyAccount from './sections/LearnerDashboard/MyAccount';
import AtOne from './pages/at-one';

let V2_FEATURE_FLAG_ON = false;

const Routes = () => {
  let [searchParams] = useSearchParams();
  const v2TurnedOn = searchParams.get('v2');
  V2_FEATURE_FLAG_ON = v2TurnedOn === 'true';

  return (
    <AppRoutes>
      <Route path="/ambassador-program" element={<AmbassadorPage />} />
      <Route path="/request-stipend" element={<RequestStipendPage />} />
      <Route path="/dashboard" element={<LearnerDashboard />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="account" element={<MyAccount />} />
      </Route>
      <Route path="/" element={V2_FEATURE_FLAG_ON ? <LandingPageV2 /> : <LandingPage />} />
      <Route path="/at-one" element={<AtOne />} />
    </AppRoutes>
  );
};

export default Routes;