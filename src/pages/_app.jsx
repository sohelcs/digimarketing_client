// import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps: { ...pageProps } }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      {/* <SessionProvider session={session}> */}
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      {/* </SessionProvider> */}
    </>
  );
}