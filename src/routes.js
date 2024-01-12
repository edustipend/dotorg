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
import Login from './pages/login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useMemo } from 'react';
const { AMBASSADOR_PROGRAM, REQUEST, APPLICATION, FORGOT_PASSWORD, RESET_PASSWORD, WELCOME, DASHBOARD, AT_ONE, LOGIN } = routesConstant;

const Routes = () => {
  const checkToken = useMemo(() => {
    const token = Cookies.get('eduTk');
    try {
      if (token) {
        const decoded = jwtDecode(token);
        console.log(decoded, 'nh');
        return decoded;
      }
    } catch (error) {
      // do nothing
    }
    return false;
  }, []);

  // validate the decoded token
  const validateToken = useMemo(() => {
    const token = checkToken;
    if (token) {
      return true;
    } else if (token.exp < Date.now() / 1000) {
      return false;
    } else {
      return false;
    }
  }, [checkToken]);

  return (
    <AppRoutes>
      <Route path={AMBASSADOR_PROGRAM} element={<AmbassadorPage />} />
      <Route path={REQUEST} element={<StartApplication />} />
      <Route path={APPLICATION} element={<RequestStipendPage />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={WELCOME} element={<ProtectedRoute element={<Welcome />} isAuthenticated={validateToken} />}></Route>
      <Route path={DASHBOARD} element={<ProtectedRoute element={<LearnerDashboard />} isAuthenticated={validateToken} />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="account" element={<MyAccount />} />
      </Route>
      {/* <Route path="/" element={V2_FEATURE_FLAG_ON ? <LandingPageV2 /> : <LandingPage />} /> */}
      <Route path="/" element={<LandingPageV2 />} />
      <Route path={AT_ONE} element={<AtOne />} />
    </AppRoutes>
  );
};

export default Routes;
