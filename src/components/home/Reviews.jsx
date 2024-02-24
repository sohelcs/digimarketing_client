import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios'; // Import axios library
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const getReviews = async () => {
        try {
            const res = await axios.get('/reviews.json');
            const data = res.data;
            setReviews(data)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getReviews()
    }, [])
    console.log(reviews)
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-28 mt-[15vh]'>
            <div
                data-aos="fade-right"
            >
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>Our Clients Words</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>

            <div
             data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-10">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // When window width is <= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // When window width is <= 768px
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // When window width is <= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {
                        reviews.map((review, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="bg-[#fff] py-8 px-4 rounded-xl flex flex-col items-center h-[55vh]">
                                        <div className="avatar">
                                            <div className="lg:md:w-24 w-16 rounded-full">
                                                <Image
                                                    src={review.image}
                                                    alt={review.name}
                                                    width={150}
                                                    height={150} />
                                            </div>
                                        </div>
                                        <h2 className="lg:md:text-lg text-[18px] font-semibold text-center text-[#FE6B01] py-4">{review.name}</h2>
                                        <p className="lg:md:text-[16px] text-[14px] text-[#333]">{review?.review}</p>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Reviews;