import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
          `,
        }}
      />
      <Head>
        <title>Firlej kamery</title>
        <meta property="og:title" content="Firlej kamery" key="title" />
        <meta property="og:image" content="http://www.firlej.pl/wp-content/uploads/2021/09/logo_firlej-2.png" />
        <meta property="og:description" content="Kamery nad jeziorem Firlej" key="description" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
