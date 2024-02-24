import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { BsStars } from "react-icons/bs";

const Banner = () => {
    const [counted, setCounted] = useState(false);

    useEffect(() => {
        setCounted(true);
    }, []);

    const handleConsultationButtonClick = () => {
        window.open('https://calendly.com/afnanferdousi550/free-consultancy', '_blank');
    };


    return (
        <div className='lg:md:flex lg:md:flex-row-reverse items-center justify-between max-w-[1400px] lg:md:px-4 px-4 mx-auto h-[90vh] my-auto'>
            <div data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/3d47fd0e-fd5b-43b4-b8d3-5f4d465bfa40/qxVvztM9gJ.json"
                    className="lg:md:w-[30vw] lg:md:h-[600px] h-[50vh] w-[80vw]"
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h3 className='text-[#333] lg:md:text-[2.4rem] text-[1.8rem] font-bold'>Unlock Your Brand&apos;s Full Potential</h3>
                <h3 className='text-[#3f3e3e] lg:md:text-2xl text-md font-semibold mt-2'>From Digital Domination to Creative Brilliance, We&apos;re Your Complete Solution for Success!</h3>
                <div className="flex items-center rounded-lg shadow lg:md:mt-12 mt-8 bg-[#f9e2d2] text-[#FE6B01]">
                    <div className="p-4 text-center w-[75%] border-r-[1px] border-[#ddd]">
                        <div className="text-lg font-bold">
                            {counted && <CountUp start={0} end={10} duration={2} />}
                        </div>
                        <div className="text-[#333] font-inter font-medium lg:md:text-[14px] text-[10px]">Years of Industry Experience</div>
                    </div>
                    <div className="p-4 text-center w-[75%] border-r-[1px] border-[#ddd]">
                        <div className="text-lg font-bold">
                            {counted && <CountUp start={0} end={98} duration={2} />}
                        </div>
                        <div className="text-[#333] font-inter font-medium lg:md:text-[14px] text-[10px]">Client Satisfaction Rate</div>
                    </div>
                    <div className="p-4 text-center w-[75%] border-r-[1px] border-[#ddd]">
                        <div className="text-lg font-bold">
                            {counted && <CountUp start={0} end={500} duration={3} />}
                        </div>
                        <div className="text-[#333] font-inter font-medium lg:md:text-[14px] text-[10px]">Campaigns Launched</div>
                    </div>
                </div>

                <button onClick={handleConsultationButtonClick} className='bg-[#FE6B01] font-inter font-medium lg:md:text-lg text-[14px] text-[#fff] py-3 px-4 rounded-md mt-8 flex items-center gap-x-2'>Get Free Consultation <span className='lg:md:text-2xl text-xl'><BsStars /></span></button>
            </div>
            
        </div>
    );
};

export default Banner;
