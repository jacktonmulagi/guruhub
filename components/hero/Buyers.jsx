import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import { GiCoffeeBeans } from 'react-icons/gi'
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';

function Buyers() {
    const [mobileScreen, setMobileScreen] = useState(false)
    const [height, setHeight] = useState("100");
    const [display, setDisplay] = useState(styles.leftHero);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    useEffect(() => {
        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileScreen(true)
        } else {
            setMobileScreen(false)
        }


        const handleShadow = () => {
            // console.log(window.scrollY)

            if (window.scrollY <= 250) {
                setHeight(100);
                setDisplay(styles.leftHeroOriginal)
            } else if (window.scrollY > 320 && window.scrollY < 350) {
                setHeight(100);
                setDisplay(styles.leftHero)
            }
            else if (window.scrollY > 400 && window.scrollY < 450) {
                setHeight(70);
                setDisplay(styles.leftHero)
            }
            else if (window.scrollY > 450) {
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
        <>

            <div className={mobileScreen ? styles.main3Mobile : styles.main2} >



                <span className={styles.rightHero}>

                </span>
                <span className={styles.leftHero}>
                    <span className={styles.leftHeroImage}>
                        {mobileScreen ? <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="120" height="90" /> :
                            <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="180" />}


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

                        We Are Licensed To Source Coffee On Your Behalf
                    </span>

                    <span className={styles.leftHeroMoreDescription}>

                        <span>
                            Types Of Coffee:
                        </span>
                        <ol type="i" className={styles.coffeeTypes}>
                            <span>
                                <li>
                                    Kenya E
                                </li>
                                <li>
                                    Kenya PB
                                </li>
                                <li>
                                    Kenya AA
                                </li>

                            </span>

                            <span>
                                <li>
                                    Kenya AB
                                </li>
                                <li>
                                    Kenya C
                                </li>
                                <li>
                                    Kenya TT
                                </li>
                            </span>
                            <span>


                                <li>
                                    Kenya T
                                </li>
                                <li>
                                    Kenya MH/ML
                                </li>
                                <li>
                                    Etc
                                </li>
                            </span>


                        </ol>
                    </span>

                    <Link href='/#contactUs' >
                        <span className={styles.heroButtons}>
                            Request Sample
                        </span>
                    </Link>

                </span>


            </div>

        </>

    )
}

export default Buyers