import React, { createContext, useContext, useState } from 'react';
import Router, { useRouter } from 'next/router';



const Context = createContext();

export const StateContext = ({ children }) => {
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [pendingModal, setPendingModal] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [modalAction, setModalAction] = useState("")
    const router = useRouter();
    const handleModalAction = (id, action) => {
        setModalAction(action)
        setPendingModal(true)
        setOpenModal(true)
    }
    

    return (
        <Context.Provider
            value={{
                openModal,
                handleOpenModal,
                handleCloseModal,
                modalAction,
                pendingModal,
                handleModalAction
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);