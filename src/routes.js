import { Routes as AppRoutes, Route } from 'react-router-dom';
import AmbassadorPage from './pages/ambassador';
import LandingPageV2 from './pages/landing-v2';
import RequestStipendPage from './pages/request-stipend';
import LearnerDashboard from './pages/learner-dashboard';
import Home from './sections/LearnerDashboard/Home';
import Submissions from './sections/LearnerDashboard/Submissions';
import MyAccount from './sections/LearnerDashboard/MyAccount';
import StartApplication from './sections/StartApplication';
import ForgotPassword from './pages/forgot-password';
import ResetPassword from './pages/reset-password';
import AtOne from './pages/at-one';
import Welcome from './sections/Welcome';
import { routesConstant } from './routesConstant';
import { useSelector } from 'react-redux';

const {
  AMBASSADOR_PROGRAM,
  REQUEST,
  APPLICATION,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  WELCOME,
  DASHBOARD,
  AT_ONE
} = routesConstant;

const Routes = () => {
  const { id } = useSelector((state) => state.user);

  return (
    <AppRoutes>
      <Route path={AMBASSADOR_PROGRAM} element={<AmbassadorPage />} />
      <Route path={REQUEST} element={<StartApplication />} />
      <Route path={APPLICATION} element={<RequestStipendPage />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      {id ? <Route path={WELCOME} element={<Welcome />} /> : <Route path="/" element={<LandingPageV2 />} />}
      {id ? (
        <Route path={DASHBOARD} element={<LearnerDashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="account" element={<MyAccount />} />
        </Route>
      ) : (
        <Route path="/" element={<LandingPageV2 />} />
      )}
      {/* <Route path="/" element={V2_FEATURE_FLAG_ON ? <LandingPageV2 /> : <LandingPage />} /> */}
      <Route path="/" element={<LandingPageV2 />} />
      <Route path={AT_ONE} element={<AtOne />} />
    </AppRoutes>
  );
};

export default Routes;
