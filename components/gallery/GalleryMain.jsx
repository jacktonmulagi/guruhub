import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import titleSeparator from '../../public/asserts/title-separator.png'
import styles from './Gallery.module.css'


function GalleryMain() {
  const [showCaption, setShowCaption] = useState("")
  const [height, setHeight] = useState("100");
  const [mobileScreen, setMobileScreen] = useState(false)
  const handleMouseOver = (e) => {
    setShowCaption(e)


  };
  const handleMouseOut = () => {

    setShowCaption("")
  };
  useEffect(() => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      setMobileScreen(true)
    } else {
      setMobileScreen(false)
    }


    const handleShadow = () => {
      console.log(window.scrollY)

      if (window.scrollY <= 3500) {
        setHeight(100);
      } else if (window.scrollY > 3500 && window.scrollY < 3700) {
        setHeight(100);
      }
      else if (window.scrollY > 3700 && window.scrollY < 3900) {
        setHeight(100);
      } else if (window.scrollY > 3700 && window.scrollY < 4000) {
        setHeight(100);
      }
      else if (window.scrollY > 4000 && window.scrollY < 4500) {
        setHeight(100);
      }
      else if (window.scrollY > 4500 && window.scrollY < 4700) {
        setHeight(100);
      }
      else if (window.scrollY > 4700 && window.scrollY < 4900) {
        setHeight(100);
      }
      else if (window.scrollY > 4900 && window.scrollY < 5000) {
        setHeight(90);
      }
      else if (window.scrollY > 5000) {
        setHeight(90);
      }
    

    };
    window.addEventListener('scroll', handleShadow);

    if (window.matchMedia("(max-width: 640px)").matches) {
      setMobileScreen(true)
    }
  }, [])


  return (
    <div className={styles.container} style={mobileScreen ? { height: `max-content` } : {  height: `${height}vh`
}}>


      <span className={styles.upperSection}>
        <span className={styles.upperSectionTitle}>

          OUR SWEET GALLERY
        </span>
        <span>
          <Image src={titleSeparator} alt={"titleSeparator"} />
        </span>




      </span>
      <span className={styles.lowerSection}>
        <span className={styles.imageGallery} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut} >






        </span>


        <span className={styles.imageGalleryTwo} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut}>




        </span>
        <span className={styles.imageGalleryThree} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut}>
          <span className={styles.imageCaption}>


          </span>



        </span>
        <span className={styles.imageGalleryFour} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut}>
          <span className={styles.imageCaption}>



          </span>



        </span>
        <span className={styles.imageGalleryFive} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut}>
          <span className={styles.imageCaption}>
            <span className={styles.imageCaptionTitle}>


            </span>
            <span className={styles.imageCaptionText}>


            </span>

          </span>



        </span>
        <span className={styles.imageGallerySix} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut}>
          <span className={styles.imageCaption}>
            <span className={styles.imageCaptionTitle}>


            </span>
            <span className={styles.imageCaptionText}>


            </span>

          </span>



        </span>
        <span className={styles.imageGallerySeven} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut} >
          <span className={styles.imageCaption}>
            <span className={styles.imageCaptionTitle}>

            </span>
            <span className={styles.imageCaptionText}>

            </span>

          </span>



        </span>

        <span className={styles.imageGalleryEight} onMouseOver={() => handleMouseOver("prefectCup")} onMouseOut={handleMouseOut}>
          <span className={styles.imageCaption}>
            <span className={styles.imageCaptionTitle}>


            </span>
            <span className={styles.imageCaptionText}>


            </span>

          </span>



        </span>



      </span>
    </div>
  )
}

export default GalleryMain