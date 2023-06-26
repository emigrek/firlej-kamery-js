import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics';
import { NextSeo } from 'next-seo';
import seoConfig from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <NextSeo {...seoConfig}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
