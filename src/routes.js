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
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProtecteAuthRoute from './components/ProtectedRoute/ProtectAuthRoute';
import SupportALearner from './pages/support-a-learner';
import DonateNow from './pages/donate-now';
import ReportsPage from './pages/reports';
import AboutUs from './pages/about-us/AboutUs';
import TransparencyDashboard from './sections/TransparencyDashboard';
import Impacts from './sections/Impacts';
import ReferPage from './pages/refer-page/ReferPage';
import { routesConstant } from './routesConstant';
import AtTwo from './pages/at-two';

const {
  AMBASSADOR_PROGRAM,
  REQUEST,
  APPLICATION,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  WELCOME,
  DASHBOARD,
  AT_ONE,
  AT_TWO,
  LOGIN,
  SUPPORT_A_LEARNER,
  DONATE_NOW,
  REPORTS,
  ABOUT_US,
  TRANSPARENCY_DASHBOARD,
  IMPACTS,
  REFERRAL_PAGE
} = routesConstant;

const Routes = () => {
  return (
    <AppRoutes>
      <Route path={AMBASSADOR_PROGRAM} element={<AmbassadorPage />} />
      <Route path={REQUEST} element={<StartApplication />} />
      <Route path={APPLICATION} element={<RequestStipendPage />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={SUPPORT_A_LEARNER} element={<SupportALearner />} />
      <Route path={REPORTS} element={<ReportsPage />} />
      <Route path={DONATE_NOW} element={<DonateNow />} />
      <Route path={ABOUT_US} element={<AboutUs />} />
      <Route path={TRANSPARENCY_DASHBOARD} element={<TransparencyDashboard />} />
      <Route path={IMPACTS} element={<Impacts />} />
      <Route
        path={LOGIN}
        element={
          <ProtecteAuthRoute>
            <Login />
          </ProtecteAuthRoute>
        }
      />
      <Route
        path={WELCOME}
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }></Route>

      <Route
        path={DASHBOARD}
        element={
          <ProtectedRoute>
            <LearnerDashboard />
          </ProtectedRoute>
        }>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="account" element={<MyAccount />} />
      </Route>
      <Route path="/" element={<LandingPageV2 />} />
      <Route path={AT_ONE} element={<AtOne />} />
      <Route path={AT_TWO} element={<AtTwo />} />
      <Route path={REFERRAL_PAGE} element={<ReferPage />} />
    </AppRoutes>
  );
};

export default Routes;
