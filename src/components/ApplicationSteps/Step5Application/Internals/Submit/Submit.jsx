import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from '../VerifyEmail';
import SubmitUI from '../SubmitUI';
import { successful, isError, errMessage } from '../../../../../store/reducers/ApplicationReducer';
import { postData } from '../../../../../services/ApiClient';

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
    gender: gender,
    stateOfOrigin: stateOfOrigin,
    howDidYouHearAboutUs: howDidYouHear
  };

  //Create the user and submit the stipend application
  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await postData('register', userInfo);
    try {
      if (res.success) {
        dispatch(successful(true));
        const applicationInfo = {
          userId: res.id,
          email: email,
          stipendCategory: Category,
          reasonForRequest: reasonForRequest,
          stepsTakenToEaseProblem: stepsTakenToEaseProblem,
          potentialBenefits: potentialBenefits,
          futureHelpFromUser: futureHelpFromUser
        };
        await postData(`user/request-stipend`, applicationInfo);
      } else if (!res.success) {
        dispatch(successful(false));
        dispatch(isError(true));
        dispatch(errMessage(res.error[0].email));
      }
    } catch (error) {
      setIsLoading(false);
      dispatch(successful(false));
      dispatch(isError(true));
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
