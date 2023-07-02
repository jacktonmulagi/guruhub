import Head from "next/head";
import Footer from "../components/footer/Footer";
import Buyers from "../components/hero/Buyers";
import Heaven from "../components/hero/Heaven";
import Masters from "../components/hero/Masters";
import NavBar from "../components/navbar/NavBar";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <title>Guruhub Innovators - Bulk SMS and Value Added Services</title>
        <meta
          name="description"
          content="Guruhub Innovators is a leading provider of bulk SMS services in Nairobi, Kenya. We specialize in helping churches, schools, and institutions communicate effectively through our innovative SMS solutions."
        />
        <meta property="og:url" content="https://www.guruhubinnovators.com/" />
        <meta
          property="og:title"
          content="Guruhub Innovators - Bulk SMS and Value Added Services"
        />
        <meta property="og:site_name" content="Guruhub Innovators" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.guruhubinnovators.com/ogBanner.png"
        />
        <meta property="og:locale" content="en_KE" />
        <meta
          property="og:description"
          content="Guruhub Innovators is a leading provider of bulk SMS services in Nairobi, Kenya. We specialize in helping churches, schools, and institutions communicate effectively through our innovative SMS solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="At Guruhub Innovators, we understand the power of communication. Our mission is to empower churches, schools, and institutions with reliable and cost-effective bulk SMS services. Contact us to learn more!"
        />
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

      <footer className={styles.footer}></footer>
    </div>
  );
}
