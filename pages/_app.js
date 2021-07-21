import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <div className="page-break-point">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
