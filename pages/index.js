import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Basic App</title>
        <meta name="description" content="Practice Next JS Components " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <Footer />
    </div>
  );
}
