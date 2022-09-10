import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './ImageDivide.module.css'
import Logo from '../../public/asserts/Logo.svg'
function ImageDivide() {
    const [height, setHeight] = useState("20");
    const [mobileView, setMobileView] = useState(false);
    useEffect(() => {
        const handleShadow = () => {

            if (window.scrollY >= 1900 && window.scrollY < 2000) {

                setHeight(20);
            } else if (window.scrollY >= 2000 && window.scrollY < 2200) {

                setHeight(40);
            }
            else if (window.scrollY >= 2200 && window.scrollY < 2400) {

                setHeight(60);
            } else if (window.scrollY > 2500) {

                setHeight(50);
            }
        };
        window.addEventListener('scroll', handleShadow);

        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileView(true)
        }
    }, []);


    return (
        <>
            {mobileView ? <div className={styles.mainMobile} style={{ height: `50vh` }} > 
            <Image src={Logo} alt={"SlideOneDescribe"}  width={"250"}/></div> :
                <div className={styles.main} style={{ height: `${height}vh` }} > <Image src={Logo} alt={"SlideOneDescribe"} width={"400"} /></div>
            }
        </>

    )
}

export default ImageDivide