import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {

    return (
        <div className='max-w-[1320px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-20 mt-[15vh]'>
            <div
                data-aos="fade-right"
            >
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>What Our Clients Say</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-xl font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>

            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;