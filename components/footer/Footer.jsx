import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import Logo from '../../public/asserts/Logo.svg'
import map from '../../public/asserts/mapPin.svg'
import phone from '../../public/asserts/contactUsPazoori.png'
import facebook from '../../public/asserts/facebook.png'
import instagram from '../../public/asserts/instagram.png'
import twitter from '../../public/asserts/twitter.png'
import whatsapp from '../../public/asserts/Whatsapp.png'
import tiktok from '../../public/asserts/tiktok.png'
import toast from 'react-hot-toast'
import Image from 'next/image';
function Footer() {
    const [mobileView, setMobileView] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

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
                <span className={styles.address}>
                    <span className={styles.addressTitle}>
                        Mobile Number
                    </span>
                    <span className={styles.addressName}>
                        <span>
                            <Image src={phone} alt={"phone"} width={"50"} height={"50"} />
                        </span>
                        <span>
                            <a href="tel: +254722478277">
                                +254722478277
                            </a>

                        </span>

                    </span>


                </span>
                <span className={styles.form}>
                    <span className={styles.formTitle}>
                        To make an order kindly send us your email address
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
                        <a href={"https://api.whatsapp.com/send?phone=%2B254722478277&text&app_absent=0"} target="_blank" rel="noreferrer" >


                            <Image src={whatsapp} alt={"whatsapp"} width={"90"} height={"90"} className={styles.socialIcons} />
                        </a>
                    </span>
                    

                </span>

            </span>


        </div>
    )
}

export default Footer