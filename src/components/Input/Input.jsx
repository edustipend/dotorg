import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Input = ({ dispatch, placeholder, lable, value, dispatchType, type }) => {
    const [initialValue, setInitialValue] = useState(value)

    const handleOnchange = (e) => {
        setInitialValue(e.target.value)
        dispatch({ type: dispatchType, payload: e.target.value })
    }

    return (
        <main>
            <label htmlFor="input">{lable}</label>
            <input type={type} name='input' placeholder={placeholder} value={initialValue}
                onChange={(e) => handleOnchange(e)}
            />
        </main>
    )
}

Input.propTypes = {
    dispatch: PropTypes.func,
    placeholder: PropTypes.string,
    lable: PropTypes.string,
    value: PropTypes.string,
    dispatchType: PropTypes.string,
    type: PropTypes.string,
}

Input.defaultProps = {
    dispatch: () => { },
    placeholder: 'Placeholder...',
    lable: 'Some label',
    value: '',
    dispatchType: '',
    type: 'text'
}