import "../styles/globals.scss";
import {Nav} from "../components/index"
function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <Nav/>
      <div className="page-break-point">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
