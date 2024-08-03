import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

const useExtractURLParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const UTM_REFERRAL_PARAMS_COOKIE_KEY = 'edustx_ref_params';

  /**
   * On app load, get search params which must include utm_referrer
   * if available, store the params in the cookies with a life span of 7 days
   *
   * on successful/completed donation, clear the user's referral params.
   */
  const extractUrlParams = () => {
    const paramsObject = {};
    for (const [key, value] of searchParams.entries()) {
      paramsObject[key] = value;
    }

    if (searchParams.get('status') === 'successful' || searchParams.get('status') === 'completed') {
      Cookies.remove(UTM_REFERRAL_PARAMS_COOKIE_KEY);
    } else if (searchParams.get('utm_referrer') && Object.keys(paramsObject).length > 0) {
      Cookies.set(UTM_REFERRAL_PARAMS_COOKIE_KEY, JSON.stringify(paramsObject), {
        expires: 3
      });
    }
  };

  const getReferralParams = () => {
    const referralParams = Cookies.get(UTM_REFERRAL_PARAMS_COOKIE_KEY);
    if (referralParams) {
      try {
        return JSON.parse(referralParams);
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  const referralObject = getReferralParams();

  return { extractUrlParams, referralObject };
};

export default useExtractURLParams;
