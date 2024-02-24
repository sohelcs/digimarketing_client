import Head from 'next/head';
import React from 'react';
import ServiceSingle from '../../../components/service/ServiceSingle';
import MainLayout from '../../../layout/MainLayout';

const SingleService = () => {
    return (
<div>
            <Head>
                <title>DigiMarketing Mix | Service</title>
            </Head>
            <ServiceSingle/>
        </div>
    );
};

export default SingleService;
SingleService.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}