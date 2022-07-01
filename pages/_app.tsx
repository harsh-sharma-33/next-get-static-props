import "../styles/index.sass";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
