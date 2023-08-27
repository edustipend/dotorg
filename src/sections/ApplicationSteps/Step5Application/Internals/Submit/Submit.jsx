import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from '../VerifyEmail';
import SubmitUI from '../SubmitUI';
import { success } from '../../../../../redux/ApplicationReducer';
import { postData } from '../../../../../services/ApiClient';

export const Submit = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const {
        Success,
        stipendCategory,
        ReasonForRequest,
        StepsTakenToEaseProblem,
        PotentialBenefits,
        FutureHelpFromUser
    } = useSelector(state => state.application)

    const {
        FullName,
        Email,
        MonthOfBirth,
        DayOfBirth,
        YearOfBirth,
        Gender,
        StateOfOrigin,
        HowDidYouHear
    } = useSelector(state => state.userDetails)

    const DOB = `${MonthOfBirth}/${DayOfBirth}/${YearOfBirth}`
    const routes = ['user/request-stipend', 'register']

    const dataBody = [
        {
            email: Email,
            stipendCategory: stipendCategory,
            reasonForRequest: ReasonForRequest,
            stepsTakenToEaseProblem: StepsTakenToEaseProblem,
            potentialBenefits: PotentialBenefits,
            futureHelpFromUser: FutureHelpFromUser,
        },
        {
            name: FullName,
            email: Email,
            dateOfBirth: DOB,
            gender: Gender,
            stateOfOrigin: StateOfOrigin,
            howDidYouHearAboutUs: HowDidYouHear

        }
    ]

    //Create the user and submit the stipend application
    const handleSubmit = () => {
        setIsLoading(true);
        const promise = routes.map((url, idx) => postData(url, dataBody[idx]))

        Promise.all(promise)
            .then(responses => {
                responses.forEach((response) => {
                    console.log('Posted', response);
                    if (response.success) {
                        dispatch(success(true))
                    } else if (!response.success) {
                        console.log('Error something went wrong', response);
                    }
                    setIsLoading(false)
                });
            }).catch(error => {
                console.log('Error', error);
                setIsLoading(false)
            }).finally(
                setIsLoading(false)
            )
    }


    return (
        <>
            {
                Success ? <VerifyEmail />
                    : <SubmitUI
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
            }
        </>
    )
}