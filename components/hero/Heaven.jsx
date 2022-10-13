import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import { GiCoffeeBeans } from 'react-icons/gi'
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';

function Heaven() {
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
        <div className={mobileScreen ? styles.main1Mobile : styles.main1} >
            <span className={styles.rightHero}>
            </span>
            <span className={styles.leftHero}>
                <span className={styles.leftHeroImage}>
                    {mobileScreen ? <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="120" height="90" /> :
                        <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="180" />}


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
                <span className={styles.leftHeroDescription}>

                    The Best kenyan Coffee.
                </span>
                <span className={styles.leftHeroMoreDescription}>

                    <span className={styles.coffeeLineHight}>
                        Pazoori is a licensed Kenyan company
                        that specializes in:
                    </span>

                    <ol type="i" className={styles.coffeeSpecialization}>
                        <span>
                            <li>
                                Coffee exports
                            </li>
                            <li>
                                Coffee Imports
                            </li>
                        </span>
                        <span>
                            <li>
                                Value addition/roasting
                            </li>
                            <li>
                                Coffee Packaging
                            </li>
                        </span>


                    </ol>
                    <span className={styles.coffeeLineHight}>
                        We are one of the few Coffee Dealers
                        who grow our own coffee over and<br />
                        above what we source from the
                        market thus guaranteeing quality.
                    </span>
                </span>
                <Link href='/#contactUs' >
                    <span className={styles.heroButtons}>
                        Request Sample
                    </span>
                </Link>

            </span>


        </div>



    )
}

export default Heaven