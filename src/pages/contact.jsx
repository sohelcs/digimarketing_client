import Head from 'next/head';
import React from 'react';
import ContactUs from '../components/contact/ContactUs';
import MainLayout from '../layout/MainLayout';

const Contact = () => {
    return (
        <div>
            <Head>
                <title>DigiMarketing Mix | Contact</title>
            </Head>
            <ContactUs />
        </div>
    );
};

export default Contact;
Contact.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>
}