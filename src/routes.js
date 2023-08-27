import { Routes as AppRoutes, Route } from 'react-router-dom';
import AmbassadorPage from './pages/ambassador';
import LandingPageV2 from './pages/landing-v2';
import RequestStipendPage from './pages/request-stipend';
import LearnerDashboard from './pages/learner-dashboard';
import Home from './sections/LearnerDashboard/Home';
import Submissions from './sections/LearnerDashboard/Submissions';
import MyAccount from './sections/LearnerDashboard/MyAccount';
import StartApplication from './sections/StartApplication';
import VerifyEmail from './pages/verify-email';
import AtOne from './pages/at-one';

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/ambassador-program" element={<AmbassadorPage />} />
      <Route path="/request" element={<StartApplication />} />
      <Route path="/application" element={<RequestStipendPage />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/dashboard" element={<LearnerDashboard />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="account" element={<MyAccount />} />
      </Route>
      {/* <Route path="/" element={V2_FEATURE_FLAG_ON ? <LandingPageV2 /> : <LandingPage />} /> */}
      <Route path="/" element={<LandingPageV2 />} />
      <Route path="/at-one" element={<AtOne />} />
    </AppRoutes>
  );
};

export default Routes;
