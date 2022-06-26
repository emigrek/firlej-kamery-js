import '../styles/globals.css'
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `}
      </Script>
      <Head>
        <title>Firlej kamery</title>
        <meta property="og:title" content="Firlej kamery" key="title" />
        <meta property="og:description" content="Kamery nad jeziorem Firlej" key="description" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
