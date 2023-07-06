import { Routes as AppRoutes, Route } from "react-router-dom";
import AmbassadorPage from "./pages/ambassador";
import LandingPage from "./pages/landing";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/ambassador-program" element={<AmbassadorPage />} />
      <Route path="/" element={<LandingPage />} />
    </AppRoutes>
  );
};

export default Routes;
