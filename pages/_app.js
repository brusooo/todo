import "../styles/globals.css";
import { Provider } from "next-auth/client";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Remember your Tasks" />
        <meta name="keywords" content="Todo , Ease" />
        <meta name="author" content="Brusooo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.svg"></link>
      </Head>

      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
