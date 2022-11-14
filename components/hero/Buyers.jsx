import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import styles from './Hero.module.css'
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';
import { useIntersection } from './intersectionObserver';


function Buyers() {
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
            setWidth(145)
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
                <div className={mobileScreen ? styles.main3Mobile : styles.main2} >



                    <span className={styles.rightHero}>

                    </span>
                    <span className={styles.leftHero}>
                        <span className={styles.leftHeroImage}>
                            {mobileScreen ? null :
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width={width} />}


                        </span>
                        <span className={styles.leftHeroSubTitle}>
                            And to our
                        </span>
                        <span className={styles.leftHeroTitle}>
                            COFFEE BUYERS

                        </span>
                        <span className={styles.leftHeroCoffeeBeans}>
                            <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                        </span>
                        <span className={styles.leftHeroDescription}>


                        </span>

                        <span className={styles.leftHeroMoreDescription}>


                            <span type="i" className={styles.coffeeTypes}>


                                By virtue of being licensed coffee dealers, we source<br /> and supply a wide variety of coffee beans that are tested for quality by our in-house coffee cupper


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

export default Buyers