import { Routes as AppRoutes, Route } from 'react-router-dom';
import AmbassadorPage from './pages/ambassador';
import LandingPage from './pages/landing';
import EmailTemplate from './pages/email/emailTemplate/EmailTemplate';
import Demo from './pages/RequestProgress/Demo';
import VerifyEmailModal from './pages/email/Modals/emailModals/VerifyEmailModal';
import CreateAccModal from './pages/email/Modals/emailModals/CreateAccModal';
import EmailVerifiedModal from './pages/email/Modals/emailModals/EmailVerifiedModal';

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/ambassador-program" element={<AmbassadorPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/email-template" element={<EmailTemplate />} />
      <Route path="/demo-create" element={<Demo />}>
        <Route path="account" element={<CreateAccModal />} />
        <Route path="verify" element={<VerifyEmailModal />} />
        <Route path="verified" element={<EmailVerifiedModal />} />
      </Route>
    </AppRoutes>
  );
};

export default Routes;
