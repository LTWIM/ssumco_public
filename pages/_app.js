import "../styles/globals.scss";
import { Footer } from "../components/index";
import {Nav} from "../components/index"

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <Nav/>
      <div className="page-break-point">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
