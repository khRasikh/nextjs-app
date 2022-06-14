import Layout from "../components/layout";
import "../styles/globals.css";
import About from "./about";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
