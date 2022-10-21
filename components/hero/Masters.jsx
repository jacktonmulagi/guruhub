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
            console.log(window.scrollY)

            if (window.scrollY < 100) {
                setHeight(100);
                setDisplay(styles.leftHeroOriginal)
            }
            else if (window.scrollY > 100 && window.scrollY < 200) {
                setHeight(100);
                setDisplay(styles.leftHero)
            } else if (window.scrollY > 200 && window.scrollY < 250) {
                setHeight(95);
                setDisplay(styles.leftHero)

            }
            else if (window.scrollY > 250 && window.scrollY < 300) {
                setHeight(80);
                setDisplay(styles.leftHero)

            }
            else if (window.scrollY >= 300 && window.scrollY < 400) {
                setHeight(30);
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
                        {/* <span className={styles.leftHeroDescription}>

                        We Grow The Highest Quality Coffee
                    </span> */}

                        <span className={styles.leftHeroMoreDescription}>
                            <span className={styles.coffeeLineHight}>
                                <span>

                                    Kenya is renown for some of the worlds finest gourmet coffees and this is what we consistently <br /> grow and produce in our plantations located in the Rift Valley
                                </span>
                                <br />


                                {/* <span>
                                The coffee beans are separated
                                (sorted) and rated by bean size as well
                                as shape, color, and density, with the
                                general assumption being that bigger
                                coffee beans are higher in quality.
                            </span> */}
                                <br />


                                {/* <span>
                                A general rule with Kenya coffee
                                beans is that bigger beans have more
                                essential oils that enhance the tastes
                                and aromas.
                            </span> */}
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