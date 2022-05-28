import "../styles/globals.css";
import { Provider } from "next-auth/client";

import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if (
      router.asPath.endsWith("#") ||
      router.asPath.includes("callback") ||
      router.asPath.includes("?")
    )
      router.push(router.pathname);
  });
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
