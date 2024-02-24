import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'; 
import React, { useState, useEffect } from 'react';

const ServiceSingle = () => {
    const router = useRouter(); // Use useRouter hook
    const { id } = router.query; 
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);

    const getServicesByCategoryId = async () => {
        try {
            setLoading(true);
            const res = await axios.get('/services.json');
            if (id) {
                const data = res.data.map(category => {
                    const filterData = category.services.find(ser =>
                        // console.log(ser?.id)
                        ser.id === Number(id)// Check if ser.id is equal to id;
                    );
                    if (filterData !== undefined) {
                        setService(filterData);
                        console.log(filterData)
                        return filterData;
                    }
                });
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        getServicesByCategoryId();
    }, [id]);

    console.log(service)
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-6'>
            <div>
                <div className='flex items-center justify-center'>
                    <Image src={service.lottie} alt={service.name} width={1000} height={500} />
                </div>

                <div className='text-justify mt-6'>
                    <div className='border-b-[2px] border-[#FE6B01] inline-block'>
                        <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-2xl text-xl'>{service.name}</h3>
                        {service.subCat && <h4 className='pt-2 pb-2 lg:md:text-lg text-[18px] font-semibold text-[#514949]  '>{service.subCat}</h4>
                        }
                    </div>
                    <div className='mt-6 bg-[#fff] p-4 rounded-md font-medium lg:md:text-[18px] text-[16px]'>
                        <p className='text-[#FE6B01]'>{service.description}</p>
                        <p className="mt-4 text-[##333]">{service.long_desc}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceSingle;
