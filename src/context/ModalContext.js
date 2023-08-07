import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ModalContext = createContext()


export const ModalContextProvider = ({ children }) => {
    const [popModal, setPopModal] = useState(false)

    const handlePopModal = () => {
        setPopModal((prev) => !prev)
    }
    const value = { handlePopModal, popModal }

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}


ModalContextProvider.propTypes = {
    children: PropTypes.node
}