import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './OnlineShop.module.css'
import titleSeparator from '../../public/asserts/title-separator.png'
import ethiopian from '../../public/asserts/pazuuriCoffeeBag.png'
import coffeePress from '../../public/asserts/coffeFrench.png'
import eppresoMachine from '../../public/asserts/eppresoMachine.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'

function OnlineShop() {
    const [infiniteControl, setInfiniteControl] = useState(false);
    const [showArrowsControl, setShowArrowsControl] = useState(false);
    const [showAutoPlay, setShowAutoPlay] = useState(true);
    const [showDraggable, setShowDraggable] = useState(false);
    const [showMobile, setShowMobile] = useState(false);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
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
            setInfiniteControl(false)
            setShowArrowsControl(true)
            setShowAutoPlay(false)
            setShowDraggable(true)
            setShowMobile(true)
        } else {
            setInfiniteControl(true)
            setShowAutoPlay(true)
            setShowDraggable(false)
            setShowMobile(false)
        }



    }, [])

    return (
        <div id={"products"} className={styles.container}>
            <span className={styles.upperSection}>
                <span className={styles.upperSectionTitle}>

                    ONLINE COFFEE SHOP
                </span>
                <span>
                    <Image src={titleSeparator} alt={"titleSeparator"} />
                </span>




            </span>
            <span className={styles.lowerSection}>
                <Carousel

                    draggable={showDraggable}
                    showDots={showArrowsControl}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={infiniteControl}
                    keyBoardControl={true}
                    customTransition="all 5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    autoPlaySpeed={4000}
                    autoPlay={showAutoPlay}
                    pauseOnHover={true}
                >
                    <Link href='/#contactUs'>
                        <span className={styles.lowerSectionChildren}>
                            <span className={styles.lowerSectionChild}>
                                <Image src={ethiopian} alt={"ethiopian"} height={showMobile ? "200" : "350"} width={showMobile ? "250" : "500"} />
                            </span>
                            <span className={styles.lowerSectionTitle}>
                                Pazoori coffee 500 grams

                            </span>
                            <span className={styles.lowerSectionParagraph}>
                                Ksh 1500.00
                            </span>


                        </span>
                    </Link>
                    <Link href='/#contactUs'>
                        <span className={styles.lowerSectionChildren}>
                            <span className={styles.lowerSectionChild}>
                                <Image src={ethiopian} alt={"ethiopian"} height={showMobile ? "200" : "350"} width={showMobile ? "250" : "500"} />
                            </span>
                            <span className={styles.lowerSectionTitle}>
                                Pazoori coffee 1Kgs

                            </span>
                            <span className={styles.lowerSectionParagraph}>
                                Ksh 2500.00
                            </span>


                        </span>
                    </Link>
                    <Link href='/#contactUs'>
                        <span className={styles.lowerSectionChildren}>
                            <span className={styles.lowerSectionChild}>
                                <Image src={ethiopian} alt={"ethiopian"} height={showMobile ? "200" : "350"} width={showMobile ? "250" : "500"} />
                            </span>
                            <span className={styles.lowerSectionTitle}>
                                Pazoori coffee 3Kgs

                            </span>
                            <span className={styles.lowerSectionParagraph}>
                                Ksh 3500.00
                            </span>


                        </span>
                    </Link>
                    <Link href='/#contactUs'>
                        <span className={styles.lowerSectionChildren}>
                            <span className={styles.lowerSectionChild}>
                                <Image src={coffeePress} alt={"coffeePress"} height={showMobile ? "180" : "350"} width={showMobile ? "300" : "300"} />
                            </span>
                            <span className={styles.lowerSectionTitle}>
                                FRENCH PRESS

                            </span>
                            <span className={styles.lowerSectionParagraph}>
                                Ksh 2300
                            </span>


                        </span>
                    </Link>
                    <Link href='/#contactUs'>
                        <span className={styles.lowerSectionChildren}>
                            <span className={styles.lowerSectionChild}>
                                <Image src={eppresoMachine} alt={"eppresoMachine"} height={showMobile ? "250" : "350"} width={"500"} />
                            </span>
                            <span className={styles.lowerSectionTitle}>
                                ESPRESSO MACHINE

                            </span>
                            <span className={styles.lowerSectionParagraph}>
                                Ksh 60000
                            </span>


                        </span>
                    </Link>
                    <Link href='/#contactUs'>
                        <span className={styles.lowerSectionChildren}>
                            <span className={styles.lowerSectionChild}>
                                <Image src={ethiopian} alt={"ethiopian"} height={showMobile ? "200" : "350"} width={showMobile ? "250" : "500"} />
                            </span>
                            <span className={styles.lowerSectionTitle}>
                                Pazoori coffee 100Kgs

                            </span>
                            <span className={styles.lowerSectionParagraph}>
                                Ksh 10500.00
                            </span>


                        </span>
                    </Link>

                </Carousel>







            </span>
        </div>
    )
}

export default OnlineShop