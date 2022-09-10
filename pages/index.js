import Head from 'next/head'
import Image from 'next/image'
import FeedBack from '../components/feedBack/FeedBack'
import Footer from '../components/footer/Footer'
import GalleryMain from '../components/gallery/GalleryMain'

import Herald from '../components/herald/Herald'
import Hero from '../components/hero/Hero'
import ImageDivide from '../components/imageDivide/ImageDivide'
import NavBar from '../components/navbar/NavBar'
import OnlineShop from '../components/onlineshop/OnlineShop'
import Offer from '../components/ourdeliciousoffer/Offer'
import Stats from '../components/statistics/Stats'
import White from '../components/white/White'
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
