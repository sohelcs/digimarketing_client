import React from 'react';
import Head from 'next/head';
import CategorizedServices from '../../components/service/CategorizedServices';
import MainLayout from '../../layout/MainLayout';

const CatService = () => {
    return (
        <div>
            <Head>
                <title>DigiMarketing Mix | Service</title>
            </Head>
            <CategorizedServices/>
        </div>
    );
};

export default CatService;
CatService.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}