import React from 'react'
import styles from './FeedBack.module.css'
import clientOne from '../../public/asserts/clientOne.png'
import clientTwo from '../../public/asserts/clientTwo.png'
import clientThree from '../../public/asserts/clientThree.png'
import clientFour from '../../public/asserts/clientFour.png'
import clientFive from '../../public/asserts/clientFive.png'
import clientSix from '../../public/asserts/clientSix.png'

import Image from 'next/image'
function FeedBack() {
    return (
        <div className={styles.containerMain}>
            <span>
                <Image src={clientOne} alt={"clientOne"} />
            </span>
            <span>
                <Image src={clientTwo} alt={"clientTwo"} />
            </span>
            <span>
                <Image src={clientThree} alt={"clientThree"} />
            </span>
            <span>
                <Image src={clientFour} alt={"clientFour"} />
            </span>
            <span>
                <Image src={clientFive} alt={"clientFive"} />
            </span>
            <span>
                <Image src={clientSix} alt={"clientSix"} />
            </span>

        </div>
    )
}

export default FeedBack