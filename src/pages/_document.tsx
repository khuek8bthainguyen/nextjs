import Document, { Html, Head, Main, NextScript } from "next/document";
import PlausibleProvider from "next-plausible";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="">
        <Head>
          <meta
            name="description"
            content="Browse Reddit better with Hamdit. Grid views, single column mode, galleries, and a number of post styles. Login with Reddit to see your own subs, vote, and comment. Open source. "
          ></meta>

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-512.png"></link>
          <meta name="theme-color" content="#384659" />

          <meta name="application-name" content="Hamdit" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Hamdit" />
          <meta name="description" content="A web app for Reddit" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          /> */}
          <meta name="msapplication-TileColor" content="#384659" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-icon" href="/icon-512.png" />

          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://Hamdit.com" />
          <meta name="twitter:title" content="Hamdit" />
          <meta name="twitter:description" content="A web app for Reddit" />
          <meta
            name="twitter:image"
            content="https://Hamdit.com/icon-192.png"
          />
          {/* <meta name="twitter:creator" content="@DavidWShadow" /> */}
          <meta property="og:type" content="website" />
          {/* <meta property="og:title" content="Hamdit" />
          <meta property="og:description" content="A web app for Reddit" /> */}
          <meta property="og:site_name" content="Hamdit" />
          <meta property="og:url" content="https://Hamdit.com" />
          <meta
            property="og:image"
            content="https://Hamdit.com/icon-512.png"
          />
        </Head>
        <PlausibleProvider domain="Hamdit.com">
          <body className=" bg-th-base text-th-text">
            <Main />
            <NextScript />
          </body>
        </PlausibleProvider>
      </Html>
    );
  }
}

export default MyDocument;
