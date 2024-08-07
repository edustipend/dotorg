import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from '../VerifyEmail';
import SubmitUI from '../SubmitUI';
import { successful, isError, errMessage, reset } from '../../../../../store/reducers/ApplicationReducer';
import { STIPEND_APPLY, postData } from '../../../../../services/ApiClient';
import { getStateIdentifier } from '../../../../../utils/getStateIdentifier';
import { useNavigate } from 'react-router';
import { resetDetails } from '../../../../../store/reducers/UserDetailsReducer';
export const Submit = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser, success } = useSelector(
    (state) => state.application
  );

  const { fullName, email, password, dateOfBirth, gender, stateOfOrigin, howDidYouHear, mediaHandle, socialHandle } = useSelector(
    (state) => state.userDetails
  );

  const Category = stipendCategory.split('/')[0].toLowerCase();

  const userInfo = {
    name: fullName?.trim(),
    email: email,
    password: password,
    dateOfBirth: dateOfBirth,
    gender: gender?.toLowerCase(),
    stateOfOrigin: getStateIdentifier(stateOfOrigin),
    howDidYouHearAboutUs: howDidYouHear?.toLowerCase(),
    stipendCategory: Category,
    reasonForRequest: reasonForRequest,
    stepsTakenToEaseProblem: stepsTakenToEaseProblem,
    potentialBenefits: potentialBenefits,
    futureHelpFromUser: futureHelpFromUser,
    socialMediaHandles: {
      [socialHandle?.toLowerCase()]: mediaHandle?.trim()
    }
  };
  //Create the user and submit the stipend application
  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await postData(STIPEND_APPLY, userInfo);
    try {
      if (res.success) {
        dispatch(successful(true));
        setTimeout(() => {
          dispatch(reset());
          dispatch(resetDetails());
          nav('/login');
        }, 5000);
      } else {
        dispatch(successful(false));
        dispatch(isError(true));
        dispatch(errMessage(res?.error?.message || res?.message));
      }
    } catch (error) {
      dispatch(successful(false));
      dispatch(isError(true));
      dispatch(errMessage(res?.error?.message || res?.message));
    } finally {
      setIsLoading(false);
    }
  };
  return <>{success ? <VerifyEmail /> : <SubmitUI handleSubmit={handleSubmit} isLoading={isLoading} />}</>;
};
