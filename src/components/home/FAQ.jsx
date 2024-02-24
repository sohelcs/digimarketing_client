import React, { useState, useEffect } from 'react';
import axios from "axios";

const FAQ = () => {
     const [faqs, setFaqs] = useState([]);

    const getFaqs = async () => {
        try {
            const res = await axios.get('/faq.json');
            const data = res.data;
            setFaqs(data)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getFaqs()
    }, [])
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-28 mt-[15vh]'>
            <div
                data-aos="fade-right"
            >
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>Frequently Asked Questions</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>  

            <div
             data-aos="fade-up"
            data-aos-duration="2000"
             className='flex flex-col gap-y-4 mt-10'>
                {faqs.map((item, index) => (
                    <div key={index} tabIndex={0} className="collapse collapse-plus rounded-md border-none bg-[#fff] text-[#FE6B01]">
                        <div className="collapse-title lg:md:text-xl text-md font-semibold">
                            {item.question}
                        </div>
                        <div className="collapse-content lg:md:ps-12 lg:md:text-[16px] text-[14px] text-[#797979]">
                            <p> {item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;