import '../styles/globals.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', `${process.env.GOOGLE_ANALYTICS}`, {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
        <meta property="og:description" content="Kamery nad jeziorem Firlej" key="description" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
