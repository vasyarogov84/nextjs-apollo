import App from "next/app";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps, router }) => {
  const displayHero = router.route === "/";
  return (
    <div className="portfolio-app">
      <Navbar />
      {displayHero && <Hero />}
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const initialProps = App.getInitialProps && (await App.getInitialProps(ctx));

  return { pageProps: { test: "test", ...initialProps.pageProps } };
};

export default MyApp;
