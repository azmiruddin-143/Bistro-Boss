import React from 'react';
import service from "../assets/chef-service.jpg"
const Service = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${service})`
        }} className="bg-cover max-w-7xl my-32 xl:p-32 p-10 mx-auto bg-no-repeat bg-center w-full h-full"
         >
            <div className='bg-white px-4 sm:py-20 py-4 w-full lg:w-10/12 mx-auto'>
                <h1 className='uppercase pb-3 text-3xl text-center text-black'>Bistro Boss</h1>
                <p className='hidden sm:block xl:w-6/12 sm:w-8/12 w-full text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                <p className=' sm:hidden xl:w-6/12 sm:w-8/12 w-full text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default Service;