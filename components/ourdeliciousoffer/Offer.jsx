import Image from 'next/image'
import React from 'react'
import titleSeparator from '../../public/asserts/title-separator.png'
import typesofcoffe from '../../public/asserts/typesofcoffe.png'
import beansvaries from '../../public/asserts/beansvaries.png'
import coffepastry from '../../public/asserts/coffepastry.png'
import coffetogo from '../../public/asserts/coffetogo.png'
import styles from './Offer.module.css'
function Offer() {
  return (
    <div id={"aboutus"} className={styles.container}>


      <span className={styles.upperSection}>
        <span className={styles.upperSectionTitle}>

          About Us
        </span>
        <span>
          <Image src={titleSeparator} alt={"titleSeparator"} />
        </span>

        <span className={styles.upperSectionParagraph}>
          Our company was born out of a passion for sharing amazing coffee, and this passion continues to drive us today. Every day we make small and deliberate choices to build and develop the quality of our coffees, our cafés, and our partnerships. We’ve been focused on creating beautiful coffee experiences and connecting people long before the days of Instagram.
        </span>


      </span>
      <span className={styles.lowerSection}>
        <span className={styles.lowerSectionChildren}>
          <span>
            <Image src={typesofcoffe} alt={"typesofcoffe"} />
          </span>
          <span className={styles.lowerSectionTitle}>
            TYPES OF COFFEE
          </span>
          <span className={styles.lowerSectionParagraph}>
            <ol type='i'>
              <li>
                Espresso
              </li>
              <li>
                Cappuccino
              </li>

            </ol>
          </span>

        </span>
        <span className={styles.lowerSectionChildren}>
          <span>
            <Image src={beansvaries} alt={"beansvaries"} />
          </span>
          <span className={styles.lowerSectionTitle}>
            BEAN VARIETIES
          </span>
          <span className={styles.lowerSectionParagraph}>
            <ol type='i'>
              <li>
                Arabica
              </li>
              <li>
                Robusta
              </li>

            </ol>
          </span>

        </span>
        <span className={styles.lowerSectionChildren}>
          <span>
            <Image src={coffepastry} alt={"coffepastry"} />
          </span>
          <span className={styles.lowerSectionTitle}>
            COFFEE & PASTRY
          </span>
          <span className={styles.lowerSectionParagraph}>
            <ol type='i'>
              <li>
                Scones, Biscotti, and Muffins
              </li>
              <li>
                Donuts, Cinnamon Buns, Coffee Cakes
              </li>

            </ol>
          </span>

        </span>
      

      </span>
    </div>
  )
}

export default Offer