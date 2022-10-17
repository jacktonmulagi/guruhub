import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import { GiCoffeeBeans } from 'react-icons/gi'
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';

function Masters() {
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
        <>

            <div className={mobileScreen ? styles.main2Mobile : styles.main} >
                <span className={styles.rightHero}>

                </span>
                <span className={styles.leftHero}>
                    <span className={styles.leftHeroImage}>
                        {mobileScreen ? <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="120" height="90" /> :
                            <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="180" />}
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
                    <span className={styles.leftHeroDescription}>

                        We Grow The Highest Quality Coffee
                    </span>

                    <span className={styles.leftHeroMoreDescription}>
                        <span className={styles.coffeeLineHight}>
                            <span>
                                As some of the world’s finest gourmet
                                coffees, Kenyan coffees are carefully
                                graded after harvest.
                            </span>
                            <br />
                            <br />

                            <span>
                                The coffee beans are separated
                                (sorted) and rated by bean size as well
                                as shape, color, and density, with the
                                general assumption being that bigger
                                coffee beans are higher in quality.
                            </span>
                            <br />
                            <br />

                            <span>
                                A general rule with Kenya coffee
                                beans is that bigger beans have more
                                essential oils that enhance the tastes
                                and aromas.
                            </span>
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

        </>

    )
}

export default Masters