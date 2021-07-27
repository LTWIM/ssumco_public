import "../styles/globals.scss";
import { Footer } from "../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <div className="page-break-point">
        <Component {...pageProps} />;
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
