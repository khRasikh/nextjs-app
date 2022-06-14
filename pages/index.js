import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home({ data }) {
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
      <div className="text-justify">
        {data.map((i) => (
          <div className="text-justify">
            <ul>
              <li>{`${i.id}. ${i.title}`}</li>
              <li>{i.body}</li>
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
