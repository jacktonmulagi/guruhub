import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import styles from './Hero.module.css'
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';
import { useIntersection } from './intersectionObserver';

function Masters() {
    const [mobileScreen, setMobileScreen] = useState(false)
    const [width, setWidth] = useState("100");
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();
    useIntersection(imgRef, () => {
        setIsInView(true);
    });
    useEffect(() => {
        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileScreen(true)
            setWidth(120)
        } else if (window.matchMedia("(max-width: 960px)").matches) {
            setWidth(140)
        }
        else if (window.matchMedia("(max-width: 1280px)").matches) {
            setMobileScreen(false)
            setWidth(140)
        }
        else {
            setMobileScreen(false)
            setWidth(180)
        }


       
      

        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileScreen(true)
        }
    }, [])
    return (
        <div ref={imgRef}>
            {isInView && (
                <div className={mobileScreen ? styles.main2Mobile : styles.main} >
                    <span className={styles.rightHero}>

                    </span>
                    <span className={styles.leftHero}>
                        <span className={styles.leftHeroImage}>
                            {mobileScreen ? null :
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width={width} />}
                        </span>
                        <span className={styles.leftHeroSubTitle}>
                            We are the
                        </span>
                        <span className={styles.leftHeroTitle}>
                            COFFEE MASTERS

                        </span>
                        <span className={styles.leftHeroCoffeeBeans}>
                            <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                        </span>
                       
                        <span className={styles.leftHeroMoreDescription}>
                            <span className={styles.coffeeLineHight}>
                                <span>

                                    Kenya is renown for some of the worlds finest gourmet coffees and this is what we consistently <br /> grow and produce in our plantations located in the Rift Valley
                                </span>
                                <br />

                                <br />


                            </span>
                        </span>
                        <Link href='/#contactUs' >
                            <span className={styles.heroButtons}>
                                Request Sample
                            </span>
                        </Link>

                    </span>


                </div>
            )}


        </div>

    )
}

export default Masters