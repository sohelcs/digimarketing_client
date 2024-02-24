import React, { useState, useEffect, createElement } from 'react';
import Link from 'next/link';
import axios from 'axios';;
import { useParams } from 'next/navigation';
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
const CategorizedServices = () => {
    const id = useParams()
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(id)
    const getServicesByCategoryId = async () => {
        try {
            setLoading(true)
            const res = await axios.get('/services.json');
            const data = res.data.filter(service => service.id === id?.id); // Filter services by categoryId
            console.log(data)
            setServices(data[0]);
            setLoading(false)

        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    useEffect(() => {
        getServicesByCategoryId()
    }, [id])
    console.log(services)

    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-6'>
            <div data-aos="fade-right">
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>{services.category}</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>
            {!loading &&
                <div data-aos="fade-up" data-aos-duration="2000" className="mt-10">
                            <div className="grid lg:md:grid-cols-3 gap-4">
                                {services.services.map((service, serviceIndex) => (
                                    <div key={service.id} className="bg-[#fff] p-4 text-center rounded-md cursor-pointer hover:scale-105 transform transition-transform ease-in-out duration-200 hover:animate-bounce flex flex-col space-between items-center">
                                        <div className="text-[#FE6B01] font-semibold text-3xl transform transition-transform ease-in-out p-2 text-center w-full flex justify-center">
                                            {iconComponent[service.icon] && createElement(iconComponent[service.icon])}
                                        </div>
                                        <h2 className="text-[#030303] font-semibold text-xl mt-2">{service.name}</h2>
                                        {service?.subCat && <h2 className="text-[#FE6B01] font-semibold text-[14px]">{service.subCat}</h2>}
                                        <p className="text-[14px] font-normal mt-3">{service.description}</p>
                                        <Link href={`/service/details/${service.id}`} className="text-[#FE6B01]">View details</Link>
                                    </div>
                                ))}
                            </div>
                </div>
            }
        </div>
    );
};


export default CategorizedServices;