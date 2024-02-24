import React, { useState, useEffect,createElement } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
    TbSeo,
    TbSocial,
    TbDeviceDesktopAnalytics
} from 'react-icons/tb';
import {RiAdvertisementLine} from 'react-icons/ri';
import {BiSolidBookContent} from 'react-icons/bi';
import {SiMarketo} from 'react-icons/si';
import {GrChannel} from 'react-icons/gr';
import {MdOutlineVideoSettings} from 'react-icons/md';

const iconComponent = {
    TbSeo,
    RiAdvertisementLine,
    TbSocial,
    BiSolidBookContent,
    SiMarketo,
    GrChannel,
    TbDeviceDesktopAnalytics,
    MdOutlineVideoSettings
}
const Services = () => {
    const [services, setServices] = useState([]);
    const router = useRouter();

    const getServices = async () => {
        try {
            const res = await axios.get('/services.json');
            const data = res.data;
            setServices(data)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getServices()
    }, [])
    console.log(services)
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-28 mt-[15vh]'>
            <div
                data-aos="fade-right"
            >
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>Services We Provide</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="2000"
             className='grid lg:md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                {
                    services.map((service) => {
                        return (
                            <div 
                            key={service.id} 
                            onClick={() => {
                                router.push(`/service/${service.id}`)
                            }}                            
                            className="bg-[#fff] p-4 text-start rounded-md cursor-pointer border-[1px] border-[#fff] hover:border-[#fe7a1a] transition-all delay-200 ease-in-out duration-200 flex item-center ">
                                <div className='text-[#fe7a1a] font-semibold lg:md:text-4xl text-3xl transform transition-transform ease-in-out p-2 text-center block'>
                                    {iconComponent[service.icon] ? createElement(iconComponent[service.icon]) : null}
                                </div>
                                <h2 className="lg:md:text-xl text-[18px] font-semibold text-[#333] w-full h-full flex items-center ">{service.category}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;