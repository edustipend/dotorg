import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from '../VerifyEmail';
import SubmitUI from '../SubmitUI';
import { success } from '../../../../../redux/ApplicationReducer/ApplicationRuducer'


export const Submit = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { Success } = useSelector(state => state.application)


    const handleSubmit = () => {
        setIsLoading(true)
        dispatch(success(true))
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