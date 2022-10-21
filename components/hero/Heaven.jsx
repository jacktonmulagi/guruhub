import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import styles from './Hero.module.css'
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';
import { useIntersection } from './intersectionObserver';

function Heaven() {
    const [mobileScreen, setMobileScreen] = useState(false)
    const [width, setWidth] = useState("100");
    const [display, setDisplay] = useState(styles.leftHero);
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
            setMobileScreen(true)
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


        const handleShadow = () => {

            if (window.scrollY <= 0) {
                setHeight(100);
                setDisplay(styles.leftHero)
            } else if (window.scrollY > 0 && window.scrollY < 50) {
                setHeight(80);
                setDisplay(styles.leftHero)
            }
            else if (window.scrollY >= 50 && window.scrollY < 100) {
                setHeight(60);
                setDisplay(styles.leftHeroOriginal)
            } else if (window.scrollY >= 100 && window.scrollY < 150) {
                setHeight(40);
                setDisplay(styles.leftHeroOriginal)
            }
            else if (window.scrollY >= 150 && window.scrollY < 200) {
                setHeight(30);
                setDisplay(styles.leftHeroOriginal)
            }
            else if (window.scrollY >= 200 && window.scrollY < 250) {
                setHeight(20);
                setDisplay(styles.leftHeroOriginal)
            }
            else if (window.scrollY >= 250 && window.scrollY < 300) {
                setHeight(0);
                setDisplay(styles.leftHeroOriginal)
            }


        };
        window.addEventListener('scroll', handleShadow);

        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileScreen(true)
        }
    }, [])
    return (
        <div ref={imgRef}>

            {isInView && (

                <div className={mobileScreen ? styles.main1Mobile : styles.main1} >
                    <span className={styles.rightHero}>
                    </span>
                    <span className={styles.leftHero}>
                        <span className={styles.leftHeroImage}>
                            {mobileScreen ? null :
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width={width} />}


                        </span>
                        <span className={styles.leftHeroSubTitle}>
                            Welcome  to
                        </span>
                        <span className={styles.leftHeroTitle}>
                            COFFEE HEAVEN

                        </span>
                        <span className={styles.leftHeroCoffeeBeans}>
                            <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                        </span>

                        <span className={styles.leftHeroMoreDescription}>

                            <span className={styles.coffeeLineHight}>
                                At Pazoori we specialize in sourcing the highest quality coffee,<br /> coffee exports, coffee imports and are soon launching our roastery
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

export default Heaven