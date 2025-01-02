import React from 'react';
import { Link } from 'react-router-dom';
const MenuBanner = ({ heading, descrption, img }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`
            }} className="bg-cover md:p-32 p-10 mx-auto bg-no-repeat bg-center w-full h-full"
        >
            <div className='sm:py-20 py-3  w-full lg:w-8/12 mx-auto bg-[#000000a5]'>
                <h1 className='uppercase pb-3 md:text-5xl text-center text-white'>{heading}</h1>
                <p className='sm:w-8/12 lg:w-10/12 xl:w-8/12 text-center mx-auto text-white'>{descrption}</p>
            </div>
            {/* <Link to={`/ourshop/${heading}`}>
                <button className="px-6 py-2 mx-auto flex border-b-2 text-center mt-8 border-black  text-black rounded  transition">
                    ORDER YOUR FAVOURITE FOOD
                </button>
            </Link> */}
        </div>
    );
};

export default MenuBanner;