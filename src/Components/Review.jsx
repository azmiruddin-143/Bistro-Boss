import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Navigation } from 'swiper/modules';
import ReactStars from 'react-stars';
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
    return (
        <div className='max-w-7xl my-28 mx-auto overflow-hidden'>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    review.map(rev =>
                        <div className='flex justify-center items-center'>
                            <SwiperSlide >
                              <div className='text-5xl flex mx-auto justify-center my-8 '>
                              {
                                rev?.rating && <ReactStars
                                    count={5}
                                    value={rev?.rating|| 5}
                                    size={40}
                                    activeColor="#ffd700"
                                    edit={false}
                                    color2 ="#e09d15"
                                    color1='gray'
                                   
                                
                                />
                               }
                              </div>

                            <FaQuoteLeft className='flex mx-auto my-8' size={40} />

                           <div className='text-center'>
                           <p className='w-10/12 mx-auto'>
                                {rev?.details}
                            </p>
                            <h1 className='text-3xl text-yellow-600 pt-3'>{rev?.name}</h1>
                           </div>

                       
                        </SwiperSlide>
                        </div>
                    )
                }
               
            </Swiper>
        </div>
    );
};

export default Review;


// {
//     rating && <ReactStars
//         count={5}
//         value={rating || 5}
//         size={24}
//         activeColor="#ffd700"
//         edit={false}
//         color2 ="#e09d15"
//         color1='gray'
      
//     />
// }