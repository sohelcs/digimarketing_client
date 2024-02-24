import React from 'react';
import Head from 'next/head';
import MainLayout from './../layout/MainLayout';
import Banner from './../components/home/Banner';
import About from './../components/home/About';
import TopServices from './../components/home/TopServices';
import Services from './../components/home/Services';
import Projects from './../components/home/Projects';
import FAQ from './../components/home/FAQ';
import Reviews from './../components/home/Reviews';

const Home = () => {
  return (
    <div>
      <Head>
        <title>DigiMarketing Mix | Home</title>        
      </Head>
      <Banner />
      <About />
      <TopServices />
      <Services />
      <Projects/>
      <FAQ/>
      <Reviews/>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}