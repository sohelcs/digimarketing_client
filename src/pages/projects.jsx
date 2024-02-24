import Head from 'next/head';
import React from 'react';
import AllProject from '../components/project/AllProject';
import MainLayout from '../layout/MainLayout';

const Project = () => {
    return (
        <div>
            <Head>
                <title>DigiMarketing Mix | Projects</title>
            </Head>
            <AllProject />
        </div>
    );
};

export default Project;
Project.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>
}