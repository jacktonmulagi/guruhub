import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";
import "react-multi-carousel/lib/styles.css";
import SlideOneDescribe from "../../public/asserts/guruhub.png";
import sliderSeparatorImg from "../../public/asserts/sliderSeparatorImg.png";
import Link from "next/link";
import { useIntersection } from "./intersectionObserver";

function Heaven() {
  const [mobileScreen, setMobileScreen] = useState(false);

  const [width, setWidth] = useState("100");
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });
  useEffect(() => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      setMobileScreen(true);
      setWidth(120);
    } else if (window.matchMedia("(max-width: 960px)").matches) {
      setWidth(140);
    } else if (window.matchMedia("(max-width: 1280px)").matches) {
      setMobileScreen(false);
      setWidth(140);
    } else {
      setMobileScreen(false);
      setWidth(180);
    }

    if (window.matchMedia("(max-width: 640px)").matches) {
      setMobileScreen(true);
    }
  }, []);
  return (
    <div ref={imgRef} id={"/"}>
      {isInView && (
        <div className={mobileScreen ? styles.main1Mobile : styles.main1}>
          <span className={styles.rightHero}></span>
          <span className={styles.leftHero}>
            <span className={styles.leftHeroImage}>
              {mobileScreen ? null : (
                <Image
                  src={SlideOneDescribe}
                  alt={"SlideOneDescribe"}
                  width={width}
                  height={100}
                />
              )}
            </span>
            <span className={styles.leftHeroSubTitle}>
              Empower Your Communications with
            </span>
            <span className={styles.leftHeroTitle}>Guruhub Innovators</span>
            <span className={styles.leftHeroCoffeeBeans}>
              <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />
            </span>

            <span className={styles.leftHeroMoreDescription}>
              <span className={styles.coffeeLineHight}>
                At Guruhub Innovators we Reach Your Audience Instantly: Engage
                with your church, school, or institution through the power of
                SMS ,<br /> Personalized Communication: Customize your messages
                and connect with individuals or groups effortlessly.
              </span>
            </span>
            <Link href="/#contactUs">
              <span className={styles.heroButtons}>Connect with Ease</span>
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default Heaven;
