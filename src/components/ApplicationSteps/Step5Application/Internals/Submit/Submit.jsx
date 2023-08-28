import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from '../VerifyEmail';
import SubmitUI from '../SubmitUI';
import { successful } from '../../../../../store/reducers/ApplicationReducer';
import { postData } from '../../../../../services/ApiClient';

export const Submit = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser, success } = useSelector(
    (state) => state.application
  );

  const { FullName, Email, Password, MonthOfBirth, DayOfBirth, YearOfBirth, Gender, StateOfOrigin, HowDidYouHear } = useSelector(
    (state) => state.userDetails
  );

  const DOB = `${MonthOfBirth}/${DayOfBirth}/${YearOfBirth}`;
  const routes = ['user/request-stipend', 'register'];

  const dataBody = [
    {
      email: Email,
      stipendCategory: stipendCategory,
      reasonForRequest: reasonForRequest,
      stepsTakenToEaseProblem: stepsTakenToEaseProblem,
      potentialBenefits: potentialBenefits,
      futureHelpFromUser: futureHelpFromUser
    },
    {
      name: FullName,
      email: Email,
      password: Password,
      dateOfBirth: DOB,
      gender: Gender,
      stateOfOrigin: StateOfOrigin,
      howDidYouHearAboutUs: HowDidYouHear
    }
  ];

  //Create the user and submit the stipend application
  const handleSubmit = () => {
    setIsLoading(true);
    const promise = routes.map((url, idx) => postData(url, dataBody[idx]));

    Promise.all(promise)
      .then((responses) => {
        responses.forEach((response) => {
          //do something with the response
          if (response.success) {
            dispatch(successful(true));
          } else if (!response.success) {
            //do something with the response
          }
          setIsLoading(false);
        });
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return <>{success ? <VerifyEmail /> : <SubmitUI handleSubmit={handleSubmit} isLoading={isLoading} />}</>;
};
