import Head from 'next/head'
import Footer from '../components/footer/Footer'
import Buyers from '../components/hero/Buyers'
import Heaven from '../components/hero/Heaven'
import Masters from '../components/hero/Masters'
import NavBar from '../components/navbar/NavBar'

import styles from '../styles/Home.module.css'

export default function Home() {
 
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

        </div>



      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
