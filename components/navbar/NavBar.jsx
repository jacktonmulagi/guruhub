import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../public/asserts/Logo.svg'
import Image from 'next/image'
import { GiCoffeeBeans } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Router, { useRouter } from 'next/router';
import Link from 'next/link'

function NavBar() {
    const router = useRouter();
    const [currentNavElementId, setCurrentNavElementId] = useState("")
    const [shadow, setShadow] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [imageHeight, setImageHeight] = useState(44)
    const [imageWidth, setImageWidth] = useState(200)
    const [mobileView, setMobileView] = useState(false);

    const handleMouseOver = (e) => {
        setCurrentNavElementId(e)
        console.log(currentNavElementId)

    };

    const handleMouseOut = () => {

        setCurrentNavElementId(prevState => null);
    };

    useEffect(() => {

        const handleShadow = () => {
            console.log(window.scrollY)
            if (window.scrollY > 200) {

                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);
    useEffect(() => {
        if (window.matchMedia("(max-width: 640px)").matches) {
            setImageHeight(30)
            setImageWidth(150)
            setMobileView(true)


        }


    }, [])
    const handleNav = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <nav className={shadow ? styles.mainShadow : styles.main}>
            <span className={styles.left}>
                <span className={styles.logoWrapper}>
                    <a href="#">

                        {mobileView && shadow ? <Image src={Logo} alt="Logo" className={styles.logo} height={imageHeight} width={imageWidth} /> : <Image src={Logo} alt="Logo" className={styles.logo} height={imageHeight} width={imageWidth} />}


                    </a>
                </span>
                <span className={styles.menuOpen}>
                    <AiOutlineMenu size={25} onClick={() => handleNav()} />
                </span>

            </span>
            {mobileNav ? (<span className={styles.mobileDrawerContainer}>
                <span className={mobileNav ? styles.mobileDrawer : styles.mobileDrawerClose}>
                    <span className={styles.mobileDrawerUpper}>
                        <Link href='/' >
                            <span className={styles.logoWrapper} onClick={() => handleNav()}>
                                <Image src={Logo} alt="Logo" className={styles.logo} height={40} width={150} />

                            </span>
                        </Link>
                        <span className={styles.menuIcon}>
                            <AiOutlineClose size={25} onClick={() => handleNav()} />
                        </span>
                    </span>
                    <span className={styles.mobileMenuList}>
                        <Link href='/' >
                            <span onClick={() => handleNav()} className={styles.mainNavLink} onMouseOver={() => handleMouseOver("Home")} onMouseOut={handleMouseOut}>
                                {currentNavElementId == "Home" || router.pathname == "/" ? <span className={styles.activeNavWrapper}>
                                    <GiCoffeeBeans color='#8B621C' size={20} />
                                </span> : null}
                                <span>
                                    Home
                                </span>
                                {currentNavElementId == "Home" || router.pathname == "/" ? <span className={styles.activeNavWrapper}>
                                    <GiCoffeeBeans color='#8B621C' size={20} />
                                </span> : null}

                            </span>
                        </Link>
                        {/* <Link href='/#products' >
                            <span onClick={() => handleNav()} className={styles.mainNavLink} onMouseOver={() => handleMouseOver("Products")} onMouseOut={handleMouseOut}>
                            {currentNavElementId == "Products" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}

                            <span>
                                Products
                            </span>
                            {currentNavElementId == "Products" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}

                        </span>
                        </Link> */}
                        {/* <Link href='/#aboutus'>
                        <span onClick={() => handleNav()} className={styles.mainNavLink} onMouseOver={() => handleMouseOver("AboutUs")} onMouseOut={handleMouseOut}>
                            {currentNavElementId == "AboutUs" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}

                            <span>
                                About us

                            </span>
                            {currentNavElementId == "AboutUs" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}



                        </span>
                        </Link> */}
                        <Link href='/#contactUs'>
                            <span onClick={() => handleNav()} className={styles.mainNavLink} onMouseOver={() => handleMouseOver("ContactUs")} onMouseOut={handleMouseOut}>
                                {currentNavElementId == "ContactUs" ? <span className={styles.activeNavWrapper}>
                                    <GiCoffeeBeans color='#8B621C' size={20} />
                                </span> : null}

                                <span>
                                    Contact us

                                </span>
                                {currentNavElementId == "ContactUs" ? <span className={styles.activeNavWrapper}>
                                    <GiCoffeeBeans color='#8B621C' size={20} />
                                </span> : null}



                            </span>
                        </Link>
                    </span>

                </span>

            </span>) :
                <span className={styles.right}>
                    <Link href='/'>
                        <span className={styles.mainNavLink} onMouseOver={() => handleMouseOver("Home")} onMouseOut={handleMouseOut}>
                            {currentNavElementId == "Home" || router.pathname == "/" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}
                            <span>
                                home
                            </span>
                            {currentNavElementId == "Home" || router.pathname == "/" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}

                        </span>
                    </Link>
                    {/* <Link href='/#products'>
                    <span className={styles.mainNavLink} onMouseOver={() => handleMouseOver("products")} onMouseOut={handleMouseOut}>
                            {currentNavElementId == "products" || router.pathname == "/products" ? <span className={styles.activeNavWrapper}>
                            <GiCoffeeBeans color='#8B621C' size={20} />
                        </span> : null}

                        <span>
                            products
                        </span>
                            {currentNavElementId == "products" || router.pathname == "/products" ?  <span className={styles.activeNavWrapper}>
                            <GiCoffeeBeans color='#8B621C' size={20} />
                        </span> : null}

                    </span>
                    </Link> */}
                    {/* <Link href='/#aboutus'>
                    <span className={styles.mainNavLink} onMouseOver={() => handleMouseOver("AboutUs")} onMouseOut={handleMouseOut}>
                        {currentNavElementId == "AboutUs" ? <span className={styles.activeNavWrapper}>
                            <GiCoffeeBeans color='#8B621C' size={20} />
                        </span> : null}

                        <span>
                            about us

                        </span>
                        {currentNavElementId == "AboutUs" ? <span className={styles.activeNavWrapper}>
                            <GiCoffeeBeans color='#8B621C' size={20} />
                        </span> : null}



                    </span>
                    </Link> */}
                    <Link href='/#contactUs'>
                        <span className={styles.mainNavLink} onMouseOver={() => handleMouseOver("ContactUs")} onMouseOut={handleMouseOut}>
                            {currentNavElementId == "ContactUs" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}

                            <span>
                                contact us
                            </span>
                            {currentNavElementId == "ContactUs" ? <span className={styles.activeNavWrapper}>
                                <GiCoffeeBeans color='#8B621C' size={20} />
                            </span> : null}
                        </span>
                    </Link>

                </span>
            }
        </nav>
    )
}

export default NavBar