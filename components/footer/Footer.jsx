import React, { useEffect, useState, useRef } from 'react'
import styles from './Footer.module.css'
import whatsapp from '../../public/asserts/Whatsapp.png'
import toast from 'react-hot-toast'
import Image from 'next/image';
import { useIntersection } from '../hero/intersectionObserver';
function Footer() {
    const [mobileView, setMobileView] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();
    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    useEffect(() => {
        toast.success('To make an order kindly send us your valid email address');

        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileView(true)
        }
    }, []);


    const handleLeads = (e) => {
        e.preventDefault();

        window.location.href = `mailto:Coffee@pazoori.com?subject=Coffee Inquiry
        &body=Hi! I am ${name}. I would like to know more about your coffee  %0D%0A
        %0D%0A%0D%0A

        ${message}%0D%0A%0D%0A

        Regards, %0D%0A
        ${name}, %0D%0A
        ${mobileNumber}`

    }
    return (
        <div ref={imgRef}>
            {isInView && (
                <div className={styles.container} id={"contactUs"}>
                    <span className={styles.upperSection}>
                        <span className={styles.Logo}>
                            {/* {mobileView ? null : <Image src={Logo} alt={"footerLogo"} width={"250"} />} */}


                        </span>
                        <span className={styles.moreDescription}>
                            <q>
                                Coffee should be something special
                            </q>


                        </span>
                        <span className={styles.address}>
                            <span className={styles.addressTitle}>
                                Location
                            </span>
                            <span className={styles.addressName}>
                                <span>

                                </span>
                                <span>
                                    Bishop Magua center , Ngong Road
                                </span>

                            </span>


                        </span>
                        <span className={styles.address}>
                            <span className={styles.addressTitle}>
                                Mobile Number
                            </span>
                            <span className={styles.addressName}>
                                <span>

                                </span>
                                <span>
                                    <a href="tel: +254722478277">
                                        +254722478277
                                    </a>

                                </span>

                            </span>


                        </span>
                        <span className={styles.address}>
                            <span className={styles.addressTitle}>
                                Email Address
                            </span>
                            <span className={styles.addressName}>

                                <span>
                                    <a href="mailto:Coffee@pazoori.com?subject=Coffee Enquiry&body=Hi! I am interested in knowing how much do you sell coffee. Please call me back" rel="noreferrer" target="_blank" title="Send us mail">

                                        Coffee@pazoori.com

                                    </a>

                                </span>

                            </span>


                        </span>
                        <span className={styles.form}>
                            <span className={styles.formTitle}>
                                To make an order kindly fill the form below.
                            </span>
                            <span>
                                <form
                                    onSubmit={handleLeads}
                                    className={styles.formDetails}
                                >
                                    <div className={styles.personalContact}>
                                        <div className={styles.inputLabelWrapper}>
                                            <input
                                                className={styles.inputField}
                                                type='text'
                                                name='name'
                                                placeholder='name'
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.personalContact}>
                                        <div className={styles.inputLabelWrapper}>
                                            <input
                                                className={styles.inputField}
                                                type='tel'
                                                name='tel'
                                                placeholder='mobile number'
                                                required
                                                onChange={(e) => setMobileNumber(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className={styles.personalContact}>
                                        <div className={styles.inputLabelWrapper}>
                                            <input
                                                className={styles.inputField}
                                                type='text'
                                                name='message'
                                                placeholder='message'
                                                required
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button className={styles.buttonLabel}>
                                        Send Message
                                    </button>
                                </form>
                            </span>

                        </span>

                    </span>

                    <span className={styles.lowerSection}>


                        <span className={styles.socialMedia}>

                            <span className={styles.socialMediaWrapper}>
                                <a href={"https://api.whatsapp.com/send?phone=%2B254722478277&text&app_absent=0"} target="_blank" rel="noreferrer" >


                                    <Image src={whatsapp} alt={"whatsapp"} width={"90"} height={"90"} className={styles.socialIcons} />
                                </a>
                            </span>


                        </span>
                        <span className={styles.copyright}>Copyright © 2022 , Pazoori </span>

                    </span>


                </div>
            )}


        </div>

    )
}

export default Footer