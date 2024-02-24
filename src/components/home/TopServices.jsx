import React, { useState, useEffect,createElement } from 'react';
import Link from 'next/link';
import axios from 'axios';
import {
    FaSearch,
    FaFacebook,
    FaEnvelope,
    FaHome,
    FaChartBar,
    FaVideo
} from 'react-icons/fa';

const iconComponent = {
    FaSearch,
    FaFacebook,
    FaEnvelope,
    FaHome,
    FaChartBar,
    FaVideo
}
const TopServices = () => {
    const [services, setServices] = useState([]);
    const getTopServices = async () => {
        try {
            const res = await axios.get('/popularServices.json');
            const data = res.data;
            setServices(data)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getTopServices()
    }, [])
    console.log(services)
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-28 mt-[15vh]'>
            <div
                data-aos="fade-right"
            >
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>Our Most Popular Services</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className='grid lg:md:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                {
                    services.map((service) => {
                        return (
                            <div key={service.id} className="bg-[#fff] lg:md:p-4 p-2 text-center rounded-md cursor-pointer hover:scale-105 transform transition-transform ease-in-out duration-200 hover:animate-bounce flex flex-col space-between items-center">
                                <div className='text-[#FE6B01] font-semibold lg:md:text-5xl text-3xl transform transition-transform ease-in-out p-2 text-center w-full flex justify-center'>
                                    {iconComponent[service.icon] ? createElement(iconComponent[service.icon]) : null}
                                </div>
                                <h2 className="text-[#030303] font-semibold lg:md:text-xl text-[18px] my-2">{service.name}</h2>
                                <p className="font-normal lg:md:text-[18px] text-[16px] pb-4">{service.description}</p>

                                <Link href={`/service/details/${service.id}`} className="text-[#FE6B01]">view details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TopServices;