import Image from 'next/image'
import React from 'react'
import styles from './Herald.module.css'
import titleSeparator from '../../public/asserts/title-separator.png'
import prepTechniques from '../../public/asserts/postOne.png'
import frenchPress from '../../public/asserts/postTwo.png'
import TurkishIbrik from '../../public/asserts/postThree.png'
import { CgDetailsMore } from 'react-icons/cg'

function Herald() {
    return (
        <div className={styles.container}>
            <span className={styles.upperSection}>
                <span className={styles.upperSectionTitle}>

                    THE Coffee Blog
                </span>
                <span>
                    <Image src={titleSeparator} alt={"titleSeparator"} />
                </span>

                <span className={styles.upperSectionParagraph}>
                    Coffee is the lifeblood of any day, and with so many options to choose from, it can be hard to know where to start.

                    That’s why We’ve created this blog section for you! Here you’ll find all the information you need on everything coffee-related – what beans are best, how to brew your perfect cup of joy, and even how to make your coffee stronger!
                    So whether you’re a beginner or an expert looking for some new ideas, check out all the articles below!
                </span>


            </span>
            <span className={styles.lowerSection}>
                <span className={styles.lowerSectionChildren}>
                    <span>
                        <Image src={prepTechniques} alt={"prepTechniques"} />
                    </span>
                    <span className={styles.lowerSectionTitle}>
                        The Best Coffee Filter Substitutes to Keep Making Coffee
                    </span>
                    <span className={styles.lowerSectionParagraph}>If you don’t have a coffee filter, you can use one of two kinds of filter substitutes. Either find another way to strain the coffee, or make coffee in water and then separate the liquid from the ground coffee...



                    </span>
                    <span className={styles.readMore}>
                        <span><CgDetailsMore size={25} /></span>
                        <span>READ MORE</span>
                    </span>

                </span>
                <span className={styles.lowerSectionChildren}>
                    <span>
                        <Image src={frenchPress} alt={"frenchPress"} />
                    </span>
                    <span className={styles.lowerSectionTitle}>
                        Coffee Wave: 1st, 2nd, and 3rd Waves of Coffee Explained

                    </span>
                    <span className={styles.lowerSectionParagraph}>
                        The evolution of coffee culture is usually organized in the first, second, and third coffee waves. All of these developments have affected the way we enjoy today’s cup of joy...
                    </span>
                    <span className={styles.readMore}>
                        <span><CgDetailsMore size={25} /></span>
                        <span>READ MORE</span>
                    </span>

                </span>
                <span className={styles.lowerSectionChildren}>
                    <span>
                        <Image src={TurkishIbrik} alt={"TurkishIbrik"} />
                    </span>
                    <span className={styles.lowerSectionTitle}>
                        Cappuccino vs. Mocha: How Do They Differ & Which Is Better?
                    </span>
                    <span className={styles.lowerSectionParagraph}>
                        When it comes to coffee, there are a few popular choices that people seem to gravitate towards.
                        
                        Cappuccino and mocha are two of those choices, but what’s the difference between them?..

                    </span>
                    <span className={styles.readMore}>
                        <span><CgDetailsMore size={25} /></span>
                        <span>READ MORE</span>
                    </span>

                </span>


            </span>
        </div>
    )
}

export default Herald


