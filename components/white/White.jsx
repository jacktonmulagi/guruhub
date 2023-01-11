import React, { useEffect, useState } from 'react'
import styles from './white.module.css'

function White() {
    const [height, setHeight] = useState("10");
    useEffect(() => {
        const handleShadow = () => {

            if (window.scrollY >= 1600 && window.scrollY < 1800) {

                setHeight(20);
            } else if (window.scrollY >= 1800 && window.scrollY < 2000) {

                setHeight(30);
            }
            else if (window.scrollY >= 2000 && window.scrollY < 2200) {

                setHeight(20);
            } else if (window.scrollY >= 2300 && window.scrollY < 2400) {

                setHeight(10);
            }
            else if (window.scrollY > 2500) {

                setHeight(0);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);
    return (
        <div className={styles.main} style={{ height: `${height}vh` }} ></div>
    )
}

export default White