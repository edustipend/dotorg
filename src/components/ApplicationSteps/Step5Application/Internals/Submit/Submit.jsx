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

  const { fullName, email, password, monthOfBirth, dayOfBirth, yearOfBirth, gender, stateOfOrigin, howDidYouHear } = useSelector(
    (state) => state.userDetails
  );

  const DOB = `${monthOfBirth}/${dayOfBirth}/${yearOfBirth}`;
  const Category = stipendCategory.split('/')[0].toLowerCase();
  const routes = ['user/request-stipend', 'register'];

  const dataBody = [
    {
      email: email,
      stipendCategory: Category,
      reasonForRequest: reasonForRequest,
      stepsTakenToEaseProblem: stepsTakenToEaseProblem,
      potentialBenefits: potentialBenefits,
      futureHelpFromUser: futureHelpFromUser
    },
    {
      name: fullName,
      email: email,
      password: password,
      dateOfBirth: DOB,
      gender: gender,
      stateOfOrigin: stateOfOrigin,
      howDidYouHearAboutUs: howDidYouHear
    }
  ];

  //Create the user and submit the stipend application
  const handleSubmit = () => {
    setIsLoading(true);
    const promise = routes.map((url, idx) => postData(url, dataBody[idx]));

    Promise.all(promise)
      .then((responses) => {
        responses.forEach((response, idx) => {
          //do something with the response
          if (response.success) {
            dispatch(successful(true));
          } else if (!response.success) {
            dispatch(successful(false));
            dispatch(isError(true));
            dispatch(errMessage(response.error[0].email));
          }
          setIsLoading(false);
        });
      })
      .catch((error) => {
        setIsLoading(false);
        dispatch(successful(false));
        dispatch(isError(true));
      });
  };
  return <>{success ? <VerifyEmail /> : <SubmitUI handleSubmit={handleSubmit} isLoading={isLoading} />}</>;
};
