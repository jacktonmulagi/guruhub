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
        <meta charset="utf-8" />
        <title>Pazoori Coffee Kenya -We specialize in sourcing the highest quality coffee </title>
        <meta name="description"
          content="  At Pazoori we specialize in sourcing the highest quality coffee,<br /> coffee exports, coffee imports and are soon launching our roastery" />
        <meta property="og:url " content="https://www.pazoori.com/" />
        <meta property="og:title" content=" By virtue of being licensed coffee dealers, we source<br /> and supply a wide variety of coffee beans that are tested for quality by our in-house coffee cupper" />
        <meta property="og:site_name" content="Pazoori Coffee" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/ogBanner.png" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:description"
          content="At Pazoori we specialize in sourcing the highest quality coffee,<br /> coffee exports, coffee imports and are soon launching our roastery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description"
          content=" Kenya is renown for some of the worlds finest gourmet coffees and this is what we consistently <br /> grow and produce in our plantations located in the Rift Valley" />
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
