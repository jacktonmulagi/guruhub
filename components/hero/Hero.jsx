import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideOneDescribe from '../../public/asserts/HeroIcon.svg';
import { GiCoffeeBeans } from 'react-icons/gi'
import sliderSeparatorImg from '../../public/asserts/sliderSeparatorImg.png';
import Link from 'next/link';

function Hero() {
    const [mobileScreen, setMobileScreen] = useState(false)
    const [height, setHeight] = useState("100");
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

            if (window.scrollY <= 0) {
                setHeight(100);
            } else if (window.scrollY > 20 && window.scrollY < 40) {
                setHeight(95);
            }
            else if (window.scrollY >= 40 && window.scrollY < 60) {
                setHeight(85);
            } else if (window.scrollY >= 60 && window.scrollY < 80) {
                setHeight(80);
            }
            else if (window.scrollY >= 80 && window.scrollY < 100) {
                setHeight(75);
            }
            else if (window.scrollY >= 100 && window.scrollY < 120) {
                setHeight(70);
            }
            else if (window.scrollY >= 120 && window.scrollY < 140) {
                setHeight(65);
            } else if (window.scrollY >= 140 && window.scrollY < 160) {
                setHeight(60);
            } else if (window.scrollY >= 160 && window.scrollY < 180) {
                setHeight(55);
            }
            else if (window.scrollY > 180 && window.scrollY < 200) {
                setHeight(50);
            }
            else if (window.scrollY >= 200 && window.scrollY < 220) {
                setHeight(45);
            } else if (window.scrollY >= 220 && window.scrollY < 240) {
                setHeight(40);
            }
            else if (window.scrollY >= 240 && window.scrollY < 260) {
                setHeight(35);
            }
            else if (window.scrollY >= 260 && window.scrollY < 280) {

                setHeight(30);
            }
            else if (window.scrollY >= 280 && window.scrollY < 300) {
                setHeight(25);
            } else if (window.scrollY >= 300 && window.scrollY < 500) {

                setHeight(20);
            } else if (window.scrollY >= 500 && window.scrollY < 700) {

                setHeight(15);
            }
            else if (window.scrollY > 700 && window.scrollY < 800) {

                setHeight(10);
            }
            else if (window.scrollY >= 800 && window.scrollY < 1000) {

                setHeight(5);
            }
            else if (window.scrollY > 1000) {

                setHeight(100);
            }


        };
        window.addEventListener('scroll', handleShadow);

        if (window.matchMedia("(max-width: 640px)").matches) {
            setMobileScreen(true)
        }
    }, [])
    return (
        <>
            {
                mobileScreen ? <Carousel

                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    autoPlaySpeed={4000}
                    autoPlay={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div className={styles.main1Mobile} >
                        <span className={styles.rightHero}>

                        </span>
                        <span className={styles.leftHero}>
                            <span className={styles.leftHeroImage}>
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="120" />

                            </span>
                            <span className={styles.leftHeroTitle}>
                                COFFEE HEAVEN

                            </span>
                            <span className={styles.leftHeroCoffeeBeans}>
                                <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                            </span>
                            <span className={styles.leftHeroDescription}>

                                We don’t make your coffee. We make your day.
                            </span>
                            <Link href='/#products' >
                                <span className={styles.heroButtons}>
                                    SHOP HERE
                                </span>
                            </Link>

                        </span>


                    </div>

                    <div className={styles.main2Mobile} >


                        <span className={styles.rightHero}>

                        </span>
                        <span className={styles.leftHero}>
                            <span className={styles.leftHeroImage}>
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="120" />

                            </span>
                            <span className={styles.leftHeroTitle}>
                                COFFEE MASTERS

                            </span>
                            <span className={styles.leftHeroCoffeeBeans}>
                                <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                            </span>
                            <span className={styles.leftHeroDescription}>

                                Don`t just drink the coffee , taste the coffee
                            </span>
                            <Link href='/#products' >
                                <span className={styles.heroButtons}>
                                    SHOP HERE
                                </span>
                            </Link>


                        </span>


                    </div>

                    <div className={styles.main3Mobile} >



                        <span className={styles.rightHero}>

                        </span>
                        <span className={styles.leftHero}>
                            <span className={styles.leftHeroImage}>
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="120" />

                            </span>
                            <span className={styles.leftHeroTitle}>
                                COFFEE FACTS

                            </span>
                            <span className={styles.leftHeroCoffeeBeans}>
                                <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                            </span>
                            <span className={styles.leftHeroDescription}>

                                Pazoori  -The Spirit Of Coffee
                            </span>
                            <Link href='/#products' >
                                <span className={styles.heroButtons}>
                                    SHOP HERE
                                </span>
                            </Link>


                        </span>


                    </div>
                </Carousel> : <Carousel

                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    autoPlaySpeed={4000}
                    autoPlay={true}
                    id='home'
                >
                    <div className={styles.main1} style={{ height: `${height}vh` }}>
                        <span className={styles.rightHero}>

                        </span>
                        <span className={styles.leftHero}>
                            <span className={styles.leftHeroImage}>
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="180" />

                            </span>
                            <span className={styles.leftHeroTitle}>
                                COFFEE HEAVEN

                            </span>
                            <span className={styles.leftHeroCoffeeBeans}>
                                <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                            </span>
                            <span className={styles.leftHeroDescription}>

                                We don’t make your coffee. We make your day.
                            </span>
                            <Link href='/#products' >
                                <span className={styles.heroButtons}>
                                    SHOP HERE
                                </span>
                            </Link>

                        </span>


                    </div>

                    <div className={styles.main} style={{ height: `${height}vh` }}>


                        <span className={styles.rightHero}>

                        </span>
                        <span className={styles.leftHero}>
                            <span className={styles.leftHeroImage}>
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="180" />

                            </span>
                            <span className={styles.leftHeroTitle}>
                                COFFEE MASTERS

                            </span>
                            <span className={styles.leftHeroCoffeeBeans}>
                                <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                            </span>
                            <span className={styles.leftHeroDescription}>

                                Don`t just drink the coffee , taste the coffee
                            </span>
                            <Link href='/#products' >
                                <span className={styles.heroButtons}>
                                    SHOP HERE
                                </span>
                            </Link>

                        </span>


                    </div>

                    <div className={styles.main2} style={{ height: `${height}vh` }}>



                        <span className={styles.rightHero}>

                        </span>
                        <span className={styles.leftHero}>
                            <span className={styles.leftHeroImage}>
                                <Image src={SlideOneDescribe} alt={"SlideOneDescribe"} width="180" />

                            </span>
                            <span className={styles.leftHeroTitle}>
                                COFFEE FACTS

                            </span>
                            <span className={styles.leftHeroCoffeeBeans}>
                                <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />

                            </span>
                            <span className={styles.leftHeroDescription}>

                                Pazoori  -The Spirit Of Coffee
                            </span>
                            <Link href='/#products' >
                                <span className={styles.heroButtons}>
                                    SHOP HERE
                                </span>
                            </Link>

                        </span>


                    </div>
                </Carousel>
            }
        </>

    )
}

export default Hero