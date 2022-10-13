import Head from 'next/head'
import Footer from '../components/footer/Footer'
import GalleryMain from '../components/gallery/GalleryMain'
import Herald from '../components/herald/Herald'
import Buyers from '../components/hero/Buyers'
import Heaven from '../components/hero/Heaven'
import Hero from '../components/hero/Heaven'
import Masters from '../components/hero/Masters'
import ImageDivide from '../components/imageDivide/ImageDivide'
import BasicModal from '../components/modal/BasicModal'
import NavBar from '../components/navbar/NavBar'
import OnlineShop from '../components/onlineshop/OnlineShop'
import Offer from '../components/ourdeliciousoffer/Offer'
import Stats from '../components/statistics/Stats'
import White from '../components/white/White'
import { useStateContext } from '../context/StateContext'

import styles from '../styles/Home.module.css'

export default function Home() {
  const { pendingModal
  } = useStateContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>Pazoori</title>
        <meta name="description" content="best coffee near me">
        </meta>
        <meta property="og:title" content="Get your favorite coffee from us in minutes">
        </meta>
        <meta property="og:description" content="At Pazoori we value our clients ">
        </meta>
        <meta property="og:url" content="https://www.pazoori.com/">

        </meta><meta property="og:type" content="website">
        </meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        {pendingModal ? <BasicModal /> :
          null}
        <div className={styles.snapContainer}>
          <section className={styles.snapContainerChildren}>
            <Heaven />
          </section>
          <section className={styles.snapContainerChildren}>
            <Masters />
          </section>
          <section className={styles.snapContainerChildren}>
            <Buyers />
          </section>
          <section className={styles.snapContainerChildren}>
            <Footer />
          </section>



          {/* <Offer />
        <Herald />
        <White />
        <ImageDivide />
        <Stats />
        <OnlineShop />
        <GalleryMain /> */}
          {/* <FeedBack/> */}

        </div>



      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
