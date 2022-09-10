import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import Logo from '../../public/asserts/Logo.svg'
import map from '../../public/asserts/mapPin.svg'
import facebook from '../../public/asserts/facebook.png'
import instagram from '../../public/asserts/instagram.png'
import twitter from '../../public/asserts/twitter.png'
import whatsapp from '../../public/asserts/Whatsapp.png'
import tiktok from '../../public/asserts/tiktok.png'
import toast from 'react-hot-toast'
import Image from 'next/image';
function Footer() {
    const [mobileView, setMobileView] = useState(false);
    useEffect(() => {
        toast.success('To make an order kindly send us your valid email address');

        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileView(true)
        }
    }, []);
    return (
        <div className={styles.container} id={"contactUs"}>
            <span className={styles.upperSection}>
                <span className={styles.Logo}>
                    {mobileView ? <Image src={Logo} alt={"footerLogo"} width={"200"} /> :
                        <Image src={Logo} alt={"footerLogo"} width={"250"} />}

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
                            <Image src={map} alt={"footerLogo"} width={"50"} height={"50"} />
                        </span>
                        <span>
                            Bishop Mangua center , Ngong Road
                        </span>

                    </span>

                </span>
                <span className={styles.form}>
                    <span className={styles.formTitle}>
                        To make an order kindly send us your email address
                    </span>
                    <span>
                        <form
                            action='https://getform.io/f/e98a6c9a-481f-404c-b581-7b09c5f54765'
                            method='POST'
                            className={styles.formDetails}
                        >
                            <div className={styles.personalContact}>
                                <div className={styles.inputLabelWrapper}>
                                    <input
                                        className={styles.inputField}
                                        type='text'
                                        name='email'
                                        placeholder='email address'
                                        required
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
                <span className={styles.copyright}>Copyright © 2022 , Pazoori </span>

                <span className={styles.socialMedia}>
                    <span className={styles.socialMediaWrapper}>
                        <a href={"https://github.com"} target="_blank" rel="noreferrer">
                            <Image src={facebook} alt={"facebook"} width={"90"} height={"90"} className={styles.socialIcons} />
                        </a>

                    </span>
                    <span className={styles.socialMediaWrapper}>
                        <a href={"https://github.com"} target="_blank" rel="noreferrer">
                            <Image src={instagram} alt={"instagram"} width={"90"} height={"90"} className={styles.socialIcons} />
                        </a>
                    </span>

                    <span className={styles.socialMediaWrapper}>
                        <a href={"https://github.com"} target="_blank" rel="noreferrer">
                            <Image src={twitter} alt={"twitter"} width={"90"} height={"90"} className={styles.socialIcons} />
                        </a>

                    </span>
                    <span className={styles.socialMediaWrapper}>
                        <a href={"https://api.whatsapp.com/send?phone=%2B254700309590&text&app_absent=0"} target="_blank" rel="noreferrer" >


                            <Image src={whatsapp} alt={"whatsapp"} width={"90"} height={"90"} className={styles.socialIcons} />
                        </a>
                    </span>
                    <span className={styles.socialMediaWrapper}>
                        <a href={"https://github.com"} target="_blank" rel="noreferrer">
                            <Image src={tiktok} alt={"tiktok"} width={"90"} height={"90"} className={styles.socialIcons} />
                        </a>

                    </span>

                </span>

            </span>


        </div>
    )
}

export default Footer