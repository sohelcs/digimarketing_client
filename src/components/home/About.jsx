import React from 'react';
import MovingText from '../shared/MovingText';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const About = () => {
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-[15vh]'>
            <div className='flex justify-between items-center'>
                <div
                    data-aos="fade-right"
                >
                    <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>About Us</h3>
                    <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
                </div>
            </div>
            <div className="absolute z-[100] bottom-[-25%] right-[8%]">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/0cfcc107-c361-4180-acf4-6cbaf79ff6c0/G5P03a2oqw.json"
                    className="lg:md:w-[15vw] lg:md:h-[200px] h-[150px] w-[200px]"
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className='bg-[#fff] mt-10 lg:md:p-8 p-6 rounded-md border-[#FE6B01] border-dashed border-[2px]'>
                <p className='lg:md:text-[20px] text-[16px] font-medium text-[#333]'>The marketing mix, a cornerstone concept in the field of marketing, encompasses the strategic blend of Product, Price, Place, and Promotion (often referred to as the 4Ps). These elements constitute the controllable tactical tools that companies utilize to influence consumer behavior and achieve their marketing objectives.

                    At <span className='text-[#FE6B01] font-bold font-montserrat'>DigiMarketingMix</span>, headquartered in New York City, we not only master the theory behind the marketing mix but also excel in its practical application within today&apos;s e-commerce landscape. Our presence in the USA offers a strategic advantage, particularly for businesses seeking seamless communication and collaboration. Being based in the USA facilitates ease of communication and accessibility for our clients, ensuring efficient coordination and timely delivery of services.

                    Our company is uniquely equipped with the latest digital knowledge and traditional marketing expertise, allowing us to craft comprehensive strategies that resonate in the digital age.

                    In the realm of Product, we work closely with businesses to optimize their offerings for online consumers, ensuring they meet market demands and stand out from competitors. Through strategic pricing strategies, we help our clients strike the right balance between profitability and competitiveness, leveraging dynamic pricing models and data-driven insights.

                    Place, another critical component of the marketing mix, involves ensuring products are readily available to consumers where and when they need them. Leveraging our expertise in e-commerce logistics and distribution, we help businesses navigate the complexities of online retail, optimizing their presence across various digital platforms and marketplaces.

                    Lastly, Promotion plays a pivotal role in driving awareness, engagement, and conversion. Through our integrated digital marketing services, including search engine optimization (SEO), social media marketing, email campaigns, and more, we help businesses effectively communicate their value proposition and connect with their target audience.

                    By leveraging our mastery of both theory and practice in the marketing mix, DigiMarketingMix empowers businesses, particularly small and medium-sized enterprises (SMEs), to thrive in the competitive e-commerce landscape. Our tailored strategies and innovative approaches enable our clients to maximize their digital presence, drive growth, and achieve long-term success in today&apos;s rapidly evolving market.</p>
            </div>

        </div>
    );
};

export default About;