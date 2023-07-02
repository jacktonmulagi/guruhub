import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";
import "react-multi-carousel/lib/styles.css";
import SlideOneDescribe from "../../public/asserts/guruhub.png";
import sliderSeparatorImg from "../../public/asserts/sliderSeparatorImg.png";
import Link from "next/link";
import { useIntersection } from "./intersectionObserver";

function Buyers() {
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
      setWidth(145);
    } else {
      setMobileScreen(false);
      setWidth(180);
    }

    if (window.matchMedia("(max-width: 640px)").matches) {
      setMobileScreen(true);
    }
  }, []);
  return (
    <div ref={imgRef}>
      {isInView && (
        <div className={mobileScreen ? styles.main3Mobile : styles.main2}>
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
              Unlock the Power of Bulk SMS with
            </span>
            <span className={styles.leftHeroTitle}>Guruhub Innovators</span>
            <span className={styles.leftHeroCoffeeBeans}>
              <Image src={sliderSeparatorImg} alt={"sliderSeparatorImg"} />
            </span>
            <span className={styles.leftHeroDescription}></span>

            <span className={styles.leftHeroMoreDescription}>
              <span type="i" className={styles.coffeeTypes}>
                Seamless School Updates: Share important announcements, event
                reminders, and academic information efficiently.
                <br /> Parental Involvement Made Simple: Engage parents in their
                childs education journey through regular updates and progress
                reports.
              </span>
            </span>

            <Link href="/#contactUs">
              <span className={styles.heroButtons}>
                Connect with Parents, and Staff Instantly
              </span>
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default Buyers;
