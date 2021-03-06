import React from "react";
import "../styles.css";
import NextHead from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <title>React Navigation Playground</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}
