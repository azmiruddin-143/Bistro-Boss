import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from "../../src/assets/slide1.jpg"
import slide2 from "../../src/assets/slide2.jpg"
import slide3 from "../../src/assets/slide3.jpg"
import slide4 from "../../src/assets/slide4.jpg"
import slide5 from "../../src/assets/slide5.jpg"
import TextTitle from '../Shared/TextTitle';

const Category = () => {
    return (
        <div className='max-w-7xl px-10 mx-auto sm:my-20 my-10'>
            <TextTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'} >
                 
            </TextTitle>
            <Swiper
                slidesPerView={4}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000, // প্রতি স্লাইড ৩ সেকেন্ড দেখাবে
                    disableOnInteraction: false, // ব্যবহারকারী ইন্টারঅ্যাক্ট করলে থামবে না
                }}
                loop={true} // লুপ চালু রাখ
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-72 object-cover' src={slide1} alt="" />
                     <h1 className='sm:text-4xl text-xl uppercase text-center text-white font-bold -mt-20'>salat</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-72 object-cover' src={slide2} alt="" />
                    <h1 className='sm:text-4xl text-xl uppercase text-center text-white font-bold -mt-20'>soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-72 object-cover' src={slide3} alt="" />
                    <h1 className='sm:text-4xl text-xl uppercase text-center text-white font-bold -mt-20'>pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-72 object-cover' src={slide4} alt="" />
                    <h1 className='sm:text-4xl text-xl uppercase text-center text-white font-bold -mt-20'>desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-72 object-cover' src={slide5} alt="" />
                    <h1 className='sm:text-4xl text-xl uppercase text-center text-white font-bold -mt-20'>salat</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;