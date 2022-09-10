import Head from 'next/head'
import Image from 'next/image'
import FeedBack from '../../feedBack/FeedBack'
import Footer from '../../footer/Footer'
import GalleryMain from '../../gallery/GalleryMain'

import Herald from '../../herald/Herald'
import Hero from '../../hero/Hero'
import ImageDivide from '../../imageDivide/ImageDivide'
import NavBar from '../../navbar/NavBar'
import OnlineShop from '../../onlineshop/OnlineShop'
import Offer from '../../ourdeliciousoffer/Offer'
import Stats from '../Stats'
import White from '../../white/White'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pazoori</title>
        <meta name="description" content=" Pazoori  -The Spirit Of Coffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/>
        <Hero/>
        <Offer/>
        <Herald/>
        <White />
        <ImageDivide/>
        <Stats/>
        <OnlineShop/>
        <GalleryMain />
        {/* <FeedBack/> */}
        <Footer/>
      
       
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
