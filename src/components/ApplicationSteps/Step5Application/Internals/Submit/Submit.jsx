import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from '../VerifyEmail';
import SubmitUI from '../SubmitUI';
import { successful, isError, errMessage } from '../../../../../store/reducers/ApplicationReducer';
import { postData } from '../../../../../services/ApiClient';
import { getStateIdentifier } from '../../../../../utils/getStateIdentifier';

export const Submit = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser, success } = useSelector(
    (state) => state.application
  );

  const { fullName, email, password, dateOfBirth, gender, stateOfOrigin, howDidYouHear } = useSelector((state) => state.userDetails);

  const Category = stipendCategory.split('/')[0].toLowerCase();

  const userInfo = {
    name: fullName,
    email: email,
    password: password,
    dateOfBirth: dateOfBirth,
    gender: gender.toLowerCase(),
    stateOfOrigin: getStateIdentifier(stateOfOrigin),
    howDidYouHearAboutUs: howDidYouHear.toLowerCase(),
    stipendCategory: Category,
    reasonForRequest: reasonForRequest,
    stepsTakenToEaseProblem: stepsTakenToEaseProblem,
    potentialBenefits: potentialBenefits,
    futureHelpFromUser: futureHelpFromUser
  };

  //Create the user and submit the stipend application
  const handleSubmit = async () => {
    setIsLoading(true);
    console.log(userInfo);
    const res = await postData('user/stipend/apply', userInfo, false);
    console.log(res);
    try {
      if (res.success) {
        dispatch(successful(true));
      } else {
        dispatch(successful(false));
        dispatch(isError(true));
        dispatch(errMessage(res?.error?.message));
      }
    } catch (error) {
      dispatch(successful(false));
      dispatch(isError(true));
      dispatch(errMessage(error.messsage));
    } finally {
      setIsLoading(false);
    }

    // Promise.all(promise)
    //   .then((responses) => {
    //     responses.forEach((response, idx) => {
    //       //do something with the response
    //       console.log(response, idx);
    //       if (response.success) {
    //         dispatch(successful(true));
    //         console.log(response, idx);
    //       } else if (!response.success) {
    //         dispatch(successful(false));
    //         dispatch(isError(true));
    //         dispatch(errMessage(response.error[0].email));
    //       }
    //       setIsLoading(false);
    //     });
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     dispatch(successful(false));
    //     dispatch(isError(true));
    //   });
  };
  return <>{success ? <VerifyEmail /> : <SubmitUI handleSubmit={handleSubmit} isLoading={isLoading} />}</>;
};
