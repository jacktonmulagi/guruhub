import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useStateContext } from '../../context/StateContext';

import mainStyles from '../../styles/modal/modal.module.css';

import BookNow from '../../public/asserts/Book.png'
import Image from 'next/image';

const styleDesktop = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

const styleMobile = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    transition: 'all 1s ease-out',
};

export default function BasicModal() {
    const [mobileView, setMobileView] = useState(false)
    const { openModal, handleCloseModal
    } = useStateContext();
    useEffect(() => {
        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileView(true)
        }



    }, [])
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={mobileView ? styleMobile : styleDesktop}>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <span className={mainStyles.main}>
                            Make your Order via
                        </span>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>


                        <span className={mainStyles.action}>
                            <div className={mainStyles.title} onClick={() => handleCloseModal()}>
                                <div className={mainStyles.login__button__container}>
                                    <a href={"https://api.whatsapp.com/send?phone=%2B254700309590&text&app_absent=0"} target="_blank" rel="noreferrer" >
                                        <Image src={BookNow} alt={'BookNow'} className={mainStyles.BookNow__button} />
                                    </a>
                                </div>
                            </div>
                        </span>
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}
